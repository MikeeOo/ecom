<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;

// These routes are loaded by the RouteServiceProvider and all of them will be assigned to the "api" middleware group.
Route::middleware('api')->group(function () {
    Route::get('/', fn () => 'API WORKS!');

    Route::prefix('products')->group(function () {
        Route::get('/', [ProductController::class, 'index'])->name('products.index');
        Route::get('/{product}', [ProductController::class, 'show'])->name('products.show');
    });

    Route::prefix('cart')->group(function () {
        Route::get('/', [CartController::class, 'index'])->name('cart.index');
        Route::patch('/{product}', [CartController::class, 'update'])->name('cart.update');
        Route::delete('/', [CartController::class, 'destroy'])->name('cart.destroy');
    });
});
