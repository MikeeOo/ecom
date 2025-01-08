<?php
namespace App\Constants;

class Routes
{
    public const ROOT = '/';
    // Auth routes
    public const LOGIN = self::ROOT . Methods::LOGIN;
    public const REGISTER = self::ROOT . Methods::REGISTER;
    public const LOGOUT = self::ROOT . Methods::LOGOUT;
    // Product routes
    public const PRODUCTS = self::ROOT . Models::PRODUCT . 's';
    public const PRODUCT = self::PRODUCTS . self::ROOT . '{' . Models::PRODUCT . '}';
    // Cart routes
    public const CART = self::ROOT . Models::CART;
    public const CART_ITEM = self::CART . self::ROOT . '{' . Models::PRODUCT . '}';
}
