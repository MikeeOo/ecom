<?php

use App\Http\Controllers\{AuthController, ProductController, CartController};
use App\Constants\Routes;
use App\Constants\Methods;

//use Illuminate\Support\Facades\Route;
//Route::middleware('api')->group(function () {});
// These routes are loaded by the RouteServiceProvider and all of them will be assigned to the "api" middleware group.
// all routes: '/api'
Route::get(Routes::ROOT, fn () => 'API WORKS!');
Route::post(Routes::LOGIN, [AuthController::class, Methods::LOGIN]);
Route::post(Routes::REGISTER, [AuthController::class, Methods::REGISTER]);
// '/products'
Route::get(Routes::PRODUCTS, [ProductController::class, Methods::INDEX]);
Route::get(Routes::PRODUCT, [ProductController::class, Methods::SHOW])->name('products.show');
// '/cart'
Route::get(Routes::CART, [CartController::class, Methods::INDEX]);
Route::patch(Routes::CART_ITEM, [CartController::class, Methods::UPDATE]);
Route::delete(Routes::CART, [CartController::class, Methods::DESTROY]);
// !!!___PROTECTED ROUTES___!!!
Route::middleware('auth:sanctum')->group(function () {
    Route::post(Routes::LOGOUT, [AuthController::class, Methods::LOGOUT]);
    //        Route::get('/users', [UserController::class, 'index']);
});
