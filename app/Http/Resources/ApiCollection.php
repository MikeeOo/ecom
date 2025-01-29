<?php
namespace App\Http\Resources;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ApiCollection extends BaseCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection,
        ];
    }
    public function toResponse($request): JsonResponse
    // prevents duplication of "links" and "metadata" after camelizeKeys();
    {
        $response = parent::toResponse($request);
        $data = $this->camelizeKeys($response->getData(true));
        $response->setData($data);
        return $response;
    }
}
