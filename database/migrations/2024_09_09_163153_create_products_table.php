<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            // should you do constrained() // because if you delete admin it will delete all the users...
            // it will be good on multi-user shop but not there
            // $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('name');
            $table->string('image_url')->nullable();
            $table->string('brand');
            $table->string('category');
            $table->longText('description')->nullable();
            $table->unsignedInteger('stock_quantity')->default(0);
            $table->decimal('price', 8, 2)->unsigned();
            $table->decimal('rating', 2, 1)->unsigned()->default(0);
            $table->unsignedInteger('reviews_count')->default(0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
