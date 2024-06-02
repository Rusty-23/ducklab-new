<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('completions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users'); // student id
            $table->foreignId('lecture_id')->constrained('lectures');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('completions');
    }
};
