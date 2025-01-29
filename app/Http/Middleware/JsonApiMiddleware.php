<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\JsonResponse;

class JsonApiMiddleware
{
    public function handle($request, Closure $next)
    {
        // Check Accept header first
        if ($request->header('Accept') !== 'application/vnd.api+json') {
            return response()->json([
                'errors' => [
                    'status' => '406',
                    'title' => 'Not Acceptable',
                    'detail' => 'The requested resource format is not supported'
                ]
            ], 406)->header('Content-Type', 'application/vnd.api+json');
        }

        // Process the request and get response
        $response = $next($request);

        // Add JSON:API version if it's a JSON response
        if ($response instanceof JsonResponse) {
            $data = $response->getData(true);
            if (!isset($data['jsonapi'])) {
                $data['jsonapi'] = ['version' => '1.1'];
                $response->setData($data);
            }
            // Ensure the Content-Type header is set correctly
            $response->header('Content-Type', 'application/vnd.api+json');
        }

        return $response;
    }
}
