<?php

use App\Http\Controllers\{AuthController, ProductController, CartController};
use App\Constants\Routes as R;
use App\Constants\Methods as M;
use App\Constants\Types as T;
use App\Constants\Models;
use App\Constants\Names as N;

//use Illuminate\Support\Facades\Route;
//Route::middleware('api')->group(function () {});
// These routes are loaded by the RouteServiceProvider and all of them will be assigned to the "api" middleware group.
// all routes: '/api'
//Route::get('/', fn () => 'API WORKS!');
Route::post('/' . M::LOGIN, [AuthController::class, M::LOGIN]);
Route::post('/' . M::REGISTER, [AuthController::class, M::REGISTER]);

Route::get('/' . T::PRODUCTS, [ProductController::class, M::INDEX]);
//Route::get('/' . T::PRODUCTS . '/{' . Models::PRODUCT . '}', [ProductController::class, M::SHOW])->name('products.show');
Route::get('/' . T::PRODUCTS . '/{' . Models::PRODUCT . '}', [ProductController::class, M::SHOW])->name(N::PRODUCTS_SHOW);

//Route::group()
Route::get('/' . T::CART, [CartController::class, M::INDEX]);
Route::patch('/' . T::CART . '/{' . Models::PRODUCT . '}', [CartController::class, M::UPDATE]);
Route::delete('/' . T::CART, [CartController::class, M::DESTROY]);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post(R::LOGOUT, [AuthController::class, M::LOGOUT]);
    //        Route::get('/users', [UserController::class, 'index']);
});
