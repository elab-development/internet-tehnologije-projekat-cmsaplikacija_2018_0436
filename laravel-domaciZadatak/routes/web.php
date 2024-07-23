<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Ruta za prikaz svih postova u Laravel Blade-u
Route::get('/posts/view', [PostController::class, 'indexView'])->name('posts.view');

Route::get('/', function () {
    return view('welcome');
});
