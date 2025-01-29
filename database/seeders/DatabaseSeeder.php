<?php
namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Users
        User::factory()->admin()->create();
        User::factory()->user()->create();
        User::factory(8)->create();
        // Products
        //        Product::factory(200)->create();
        Product::factory(2)->create();
    }
}
