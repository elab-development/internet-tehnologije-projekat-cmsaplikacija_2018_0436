<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Auth\AuthController;


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

    // Prikaz svih kategorija
    Route::get('/categories', [CategoryController::class, 'index']);

    // Prikaz svih postova
    Route::get('/posts', [PostController::class, 'index']);

    // Prikaz svih postova za prikaz u Laravel Blade-u
    Route::get('/posts/view', [PostController::class, 'indexView']);

    // Registracija
    Route::post('/registracija', [AuthController::class, 'registracija']);

    // Prijavljivanje
    Route::post('/prijava', [AuthController::class, 'prijava']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

    // KORISNICI
    // Prikazivanje svih korisnika
    Route::get('/users', [UserController::class, 'index']); 
    // Prikazivanje specificnog korisnika
    Route::get('/users/{id}', [UserController::class, 'show']); 

    // KATEGORIJE
    // Prikazivanje pojedinačne kategorije
    Route::get('/categories/{id}', [CategoryController::class, 'show']);

    // Kreiranje nove kategorije
    Route::post('/categories', [CategoryController::class, 'store']);

    // Ažuriranje postojeće kategorije
    Route::put('/categories/{id}', [CategoryController::class, 'update']);

    // Ažuriranje samo opisa kategorije
    Route::patch('/categories/{id}/description', [CategoryController::class, 'updateDescription']);

    // Brisanje kategorije
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);

    // POSTOVI
    // Prikazivanje pojedinačnog posta
    Route::get('/posts/{id}', [PostController::class, 'show']);

    // Kreiranje novog posta
    Route::post('/posts', [PostController::class, 'store']);

    // Ažuriranje postojećeg posta
    Route::put('/posts/{id}', [PostController::class, 'update']);

    // Ažuriranje samo sadržaja posta
    Route::patch('/posts/{id}/content', [PostController::class, 'updateContent']);

    // Brisanje posta
    Route::delete('/posts/{id}', [PostController::class, 'destroy']);

    // Odjava korisnika
    Route::post('/odjava', [AuthController::class, 'odjava']);

});
