<?php
namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
//            'user_id' => User::all()->random()->id,
            'name' => fake()->words(3, true),
//            'image_url' => fake()->optional()->imageUrl(),
            'image_url' => fake()->imageUrl(),
            'brand' => fake()->company(),
            'category' => fake()->word(),
            'description' => fake()->paragraph(),
            'stock_quantity' => fake()->numberBetween(0, 1000),
            'price' => fake()->randomFloat(2, 1, 1000),
            'rating' => fake()->randomFloat(1, 0, 5),
            'reviews_count' => fake()->numberBetween(0, 500),
        ];
    }
}
