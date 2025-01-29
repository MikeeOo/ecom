<?php
namespace App\Constants;

class Routes
{
    // Auth routes
    public const LOGIN = '/' . Methods::LOGIN;
    public const REGISTER = '/' . Methods::REGISTER;
    public const LOGOUT = '/' . Methods::LOGOUT;
    // Product routes
    public const PRODUCTS = '/products';
    public const PRODUCT = '/products/{product}';
    // Cart routes
    public const CART = '/cart';
    public const CART_ITEM = '/cart/{product}';
}
