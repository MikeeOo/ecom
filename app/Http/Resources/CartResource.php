<?php
namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Session;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'type' => 'cart',
            'id' => Session::getId() . '_' . ($this->created_at ? $this->created_at->timestamp : time()),
            'attributes' => [
                'items' => $this->items,
                'count' => $this->count,
                'sum' => $this->sum,
                'created_at' => $this->created_at ? $this->created_at->toIso8601String() : null,
                'updated_at' => $this->updated_at ? $this->updated_at->toIso8601String() : null,
            ],
            'relationships' => [
                'items' => [
                    'data' => $this->getItemsData(),
                    'links' => [
                        'related' => $this->getItemsLinks(),
                    ],
                    'meta' => [
                        'total_items' => count($this->items)
                    ]
                ],
            ],
            'links' => [
                'self' => route('cart.index'),
            ],
        ];
    }
    private function getItemsData(): array
    {
        return collect($this->items)->map(function ($item) {
            return [
                'type' => 'products',
                'id' => (string) $item['id'],
            ];
        })->all();
    }
    private function getItemsLinks(): array
    {
        return collect($this->items)->mapWithKeys(function ($item) {
            return [(string) $item['id'] => route('products.show', ['product' => $item['id']])];
        })->all();
    }
}
