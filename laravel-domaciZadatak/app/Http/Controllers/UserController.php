<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // Vrati sve korisnike
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    // Vrati specificnog korisnika
    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }
}
