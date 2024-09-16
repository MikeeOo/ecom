<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = ['items', 'count', 'sum'];
    protected $casts = [
        'items' => 'array',
        'count' => 'integer',
        'sum' => 'decimal:2',
    ];
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->items = $attributes['items'] ?? [];
        $this->count = $attributes['count'] ?? 0;
        $this->sum = $attributes['sum'] ?? 0.0;
    }
    public function addItem(array $item): void
    {
        $items = $this->items;
        $items[] = $item;
        $this->items = $items; // this might be not needed
    }
    public function updateItemQuantity(int $itemKey, int $quantityChange, int $stockQuantity): void
    {
        $items = $this->items;
        if (isset($items[$itemKey])) {
            $newQuantity = $items[$itemKey]['quantity'] + $quantityChange;
            if ($quantityChange > 0) {
                // Incrementing: Check against stock quantity
                $items[$itemKey]['quantity'] = min($newQuantity, $stockQuantity);
            } else {
                // Decrementing: Ensure quantity doesn't go below 1
                $items[$itemKey]['quantity'] = max($newQuantity, 1);
            }
            $this->items = $items;
        }
    }
}
