<?php
namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\Product;
use App\Traits\HttpResponses;
use App\Http\Requests\CartUpdateRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Session;
use Exception;
use InvalidArgumentException;

class CartController extends Controller
{
    use HttpResponses;
    public function index(): JsonResponse
    {
        try {
            $cartResource = $this->getCart();
            $message = $cartResource->isEmpty() ? 'Cart is empty' : 'Cart retrieved successfully';
            return $this->success($cartResource, $message);
        } catch (Exception $e) {
            return $this->handleException($e, 'An unexpected error occurred while retrieving the cart.');
        }
    }
    public function update(CartUpdateRequest $request, Product $product): JsonResponse
    {
        $validated = $request->validated();
        $cartResource  = $this->getCart();
        $cart  = $cartResource->resource;

        $itemKey = $this->findCartItemKey($cart->items, $product->id);
        $isNewItem = false;

        if ($itemKey !== false) { // because key can be [0]
            $this->updateExistingItem($cart, $itemKey, $product, $validated['action']);
        } elseif ($validated['action'] === 'increment' && $product->stock_quantity > 0) {
            $this->addNewItem($cart, $product);
            $isNewItem = true;
        }

        $this->updateCartTotals($cart);
        Session::put('cart', $cart->toArray());
        $updatedCartResource = new CartResource($cart);

        if ($isNewItem) {
            return $this->created($updatedCartResource, 'Item added to cart successfully');
        } else {
            return $this->success($updatedCartResource, $this->getUpdateMessage($validated['action']));
        }
    }
    // ^^UPDATE^^ _PRIVATES
    private function getCart(): CartResource
    {
        $cartData = Session::get('cart');
        $cart = $cartData ? new Cart($cartData) : new Cart();
        return new CartResource($cart);
    }
    private function findCartItemKey(array $items, int $productId): false|int
    {
        return array_search($productId, array_column($items, 'id'));
    }
    private function updateExistingItem(Cart $cart, int $itemKey, Product $product, string $action): void
    {
        $quantityChange = $action === 'increment' ? 1 : -1;
        $cart->updateItemQuantity($itemKey, $quantityChange, $product->stock_quantity);
    }
    private function addNewItem(Cart $cart, Product $product): void
    {
        $cart->addItem([
            'id' => $product->id,
            'name' => $product->name,
            'price' => $product->price,
            'quantity' => 1,
            'stock_quantity' => $product->stock_quantity,
        ]);
    }
    private function updateCartTotals(Cart $cart): void
    {
        $cart->count = array_sum(array_column($cart->items, 'quantity'));
        $cart->sum = array_sum(array_map(fn ($item) => $item['quantity'] * $item['price'], $cart->items));
    }
    private function getUpdateMessage(string $action): string
    {
        return match($action) {
            'increment' => 'Item quantity increased in cart',
            'decrement' => 'Item quantity decreased in cart',
            default => throw new InvalidArgumentException("Unexpected action: $action")
        };
    }
    //
    public function destroy(Request $request): string
    {
        $request->session()->flush();
        return 'Session cleared';
    }
}
