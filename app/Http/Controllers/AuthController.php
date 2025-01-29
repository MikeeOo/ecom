<?php
namespace App\Http\Controllers;

use App\Http\Requests\{LoginRequest, RegisterRequest};
use App\Models\User;
use App\Traits\HttpResponses;
use Illuminate\Http\{JsonResponse, Request};

class AuthController extends Controller
{
    use HttpResponses;
    public function login(LoginRequest $request): JsonResponse
    {
        return $this->success(null, 'Login method', 200);
    }
    public function register(RegisterRequest $request): JsonResponse
    {
        //        dd('xd');
        return $this->success(null, 'Register method', 200);
    }
    public function logout(Request $request): JsonResponse
    {
        return $this->success(null, 'Logout method', 200);
        //        return $this->success(null, 'User logged out successfully', 200);
    }
}
