<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('memories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');

            $table->text('input');
            $table->text('response');
            $table->string('emotion', 50)->default('neutrale');
            $table->string('intention', 50)->default('nessuna');
            $table->string('mode', 50)->default('supporto');

            $table->timestamp('created_at')->useCurrent();
        });
    }

    public function down(): void {
        Schema::dropIfExists('memories');
    }
};
