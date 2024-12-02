<?php
namespace App\Traits;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

trait HttpResponses
{
    protected function success($data, ?string $message = null, int $code = 200): JsonResponse
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], $code);
    }
    protected function error($data, ?string $message = null, int $code = 400): JsonResponse
    {
        return response()->json([
            'success' => false,
            'message' => $message,
            'error' => $data,
        ], $code);
    }
    protected function created($data, string $message = 'Resource created successfully'): JsonResponse
    {
        return $this->success($data, $message, 201);
    }
    protected function noContent(string $message = 'No content'): JsonResponse
    {
        return $this->success(null, $message, 204);
    }
    protected function notFound(string $message = 'Resource not found'): JsonResponse
    {
        return $this->error(null, $message, 404);
    }
    protected function forbidden(string $message = 'Forbidden'): JsonResponse
    {
        return $this->error(null, $message, 403);
    }
    protected function unauthorized(string $message = 'Unauthorized'): JsonResponse
    {
        return $this->error(null, $message, 401);
    }
    protected function handleException(\Exception $e, string $customMessage = 'An error occurred', int $code = 500): JsonResponse
    {
        Log::error($customMessage . ': ' . $e->getMessage());
        return $this->error(
            null,
            $customMessage,
            $code
        );
    }
}
