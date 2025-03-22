<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->integer('age')->nullable();

            // Preferenze personali
            $table->boolean('prefers_emoji')->default(true);
            $table->string('preferred_style', 100)->default('empatico');
            $table->string('preferred_mode', 50)->default('supporto');

            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('users');
    }
};
