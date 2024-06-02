<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\LectureController;
use App\Http\Controllers\EnrollmentController;
use App\Http\Controllers\CompletionController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/student/login', [AuthController::class, 'studentLogin']);


Route::middleware('auth:sanctum')->group(function () {
    // Courses
    Route::get('/courses', [CourseController::class, 'index']);
    Route::get('/courses/{course:slug}', [CourseController::class, 'show']);
    Route::post('/courses', [CourseController::class, 'store']);
    Route::put('/courses/{course}', [CourseController::class, 'update']);
    Route::delete('/courses/{course}', [CourseController::class, 'destroy']);

    // Lectures
    Route::get('/courses/{course:slug}/lectures', [LectureController::class, 'index']);
    Route::get('/lectures/{lecture:slug}', [LectureController::class, 'show']);
    Route::post('/courses/{course:slug}/lectures', [LectureController::class, 'store']);
    Route::put('/lectures/{lecture}', [LectureController::class, 'update']);
    Route::delete('/lectures/{lecture}', [LectureController::class, 'destroy']);

    // Enrollments
    Route::post('/courses/{course:slug}/enroll', [EnrollmentController::class, 'store']);

    // Completions
    Route::post('/lectures/{lecture:slug}/complete', [CompletionController::class, 'store']);
});


