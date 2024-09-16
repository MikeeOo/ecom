<?php
namespace App\Http\Controllers;

use App\Http\Requests\CartUpdateRequest;
use App\Models\Product;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;

class CartController extends Controller
{
    use HttpResponses;
    public function index()
    {
        dd(session()->all());
    }
    public function update(CartUpdateRequest $request, Product $product)
    {
        $request->validated();

        $cart = $request->session()->get('cart', [
            'items' => [],
            'count' => 0,
            'sum' => 0,
        ]);
        $product_exists = false;
        foreach ($cart['items'] as &$item) { // & - modifies the original array
            if ($item['id'] === $product->id) {
                switch ($request->action) {
                    case 'increment':
                        if ($item['quantity'] < $product->stock_quantity) {
                            $item['quantity']++;
                        }
                        break;
                    case 'decrement':
                        if ($item['quantity'] > 1) {
                            $item['quantity']--;
                        }
                        break;
                }
                $product_exists = true;
                break;
            }
        }
        // TODO: error when you call decrement
        // TODO: maybe create status: available or out of stock or all
        if (!$product_exists && $request->action === 'increment' && $product->stock_quantity > 0) {
            $cart['items'][] = [
                'id' => $product->id,
                'name' => $product->name,
                'price' => $product->price,
                'quantity' => 1,
                'stock_quantity' => $product->stock_quantity,
            ];
        }
        $cart['count'] = array_sum(array_column($cart['items'], 'quantity'));
        $cart['sum'] = array_sum(array_map(fn ($item) => $item['quantity'] * $item['price'], $cart['items']));
        $request->session()->put('cart', $cart);
        return $this->success($cart);
    }
    // TODO: public function remove(Request $request)
    // - should be delete or other method
    public function destroy(Request $request)
    {
        $request->session()->flush();
        return 'Session cleared';
    }
}
