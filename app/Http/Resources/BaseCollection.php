<?php
namespace App\Http\Resources;

use App\Traits\CamelizeArrayKeys;
use Illuminate\Http\Resources\Json\ResourceCollection;

abstract class BaseCollection extends ResourceCollection
{
    use CamelizeArrayKeys;
}
