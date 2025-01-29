<?php
namespace App\Http\Resources;

use Illuminate\Http\Request;

class ProductResource extends BaseResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->camelizeKeys([
            'type' => 'products',
            'id' => (string)$this->id,
            'attributes' => [
            'name' => $this->name,
            'image_url' => $this->image_url,
            'brand' => $this->brand,
            'category' => $this->category,
            'description' => $this->description,
            'stock_quantity' => $this->stock_quantity,
            'price' => $this->price,
            'rating' => $this->rating,
            'reviews_count' => $this->reviews_count,
            'created_at' => $this->created_at->toIso8601String(),
            'updated_at' => $this->updated_at->toIso8601String(),
            ],
            'links' => [
                'self' => route('products.show', $this->id),
            ],
        ]);
    }
}
