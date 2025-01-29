<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool // TODO: do you need a custom error if false
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
        // 'first_name' => ['required', 'string', 'min:2', 'max:255'],
        // 'last_name' => ['required', 'string', 'min:2', 'max:255'],
            'email' => ['required', 'string', 'email', 'unique:users', 'max:255'],
            'password' => ['required', 'confirmed', Password::defaults()],
            // 'confirmed' looks for '{field}_confirmation' name on input
            // Password::defaults() checks all default password
                // additionally it checks if it has been compromised via Have I Been Pwned API
        ];
    }
}
