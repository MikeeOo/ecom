<?php
namespace App\Http\Controllers;

use App\Http\Resources\ApiCollection;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(): ApiCollection
    {
        $products = Product::paginate();
        return new ApiCollection($products);
    }
    public function show(Product $product): ProductResource
    {
        return new ProductResource($product);
    }
    public function store(Request $request)
    {
        //
    }
    public function update(Request $request, string $id)
    {
        //
    }
    public function destroy(string $id)
    {
        //
    }
}
