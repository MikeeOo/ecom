<?php
namespace App\Http\Resources;

use App\Traits\CamelizeArrayKeys;
use Illuminate\Http\Resources\Json\JsonResource;

abstract class BaseResource extends JsonResource
{
    use CamelizeArrayKeys;
}
