<?php
namespace App\Traits;

use Illuminate\Support\Str;

trait CamelizeArrayKeys
{
    protected function camelizeKeys(array $array): array
    {
        $result = [];
        foreach ($array as $key => $value) {
            $newKey = Str::camel($key);
            if (is_array($value)) {
                $value = $this->camelizeKeys($value);
            }
            $result[$newKey] = $value;
        }
        return $result;
    }
}
