<?php

use Illuminate\Support\Facades\Route;

// These routes are loaded by the RouteServiceProvider and all of them will be assigned to the "web" middleware group.
Route::get('/', fn () => 'WEB WORKS!');
