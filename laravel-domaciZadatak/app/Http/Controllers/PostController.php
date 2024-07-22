<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Resources\PostResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    // Prikaz svih postova
    public function index()
    {
        $posts = Post::all();
        return PostResource::collection($posts);
    }

    // Prikaz svih postova u okviru Laravel Blade-a
    public function indexView()
    {
        // Fetch paginated posts
        $posts = Post::paginate(4);

        // Return the view with the paginated posts
        return view('welcome', ['posts' => $posts]);
    }

    // Prikazivanje pojedinačnog posta
    public function show($id)
    {
        $post = Post::findOrFail($id);
        return new PostResource($post);
    }

    // Unos posta
    public function store(Request $request)
    {
        $user_id = Auth::user()->id;

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'content' => 'required',
            'extra' => 'required',
            'category_id' => 'required',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors);
        }

        $post = new Post();
        $post->title = $request->title;
        $post->content = $request->content;
        $post->extra = $request->extra;
        $post->category_id = $request->category_id;
        $post->user_id = $user_id;

        $post->save();

        return response()->json(['Uspešno kreiran novi post!', new PostResource($post)]);
    }

    // Ažuriranje informacija o postu
    public function update(Request $request, $id)
    {
        $user_id = Auth::user()->id;

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'content' => 'required',
            'extra' => 'required',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors);
        }

        $post_user_id = Post::where('id', $id)->value('user_id');

        if ($user_id != $post_user_id) {
            return response()->json(['error' => 'Vi niste korisnik koji je kreirao ovaj post!'], 403);
        }

        $post = Post::findOrFail($id);

        $post->title = $request->title;
        $post->content = $request->content;
        $post->extra = $request->extra;

        $post->save();

        return response()->json(['Uspešno ažuriran post!', new PostResource($post)]);
    }

    // Ažuriranje samo content-a posta
    public function updateContent(Request $request, $id)
    {
        $user_id = Auth::user()->id;

        $request->validate([
            'content' => 'required'
        ]);

        $post_user_id = Post::where('id', $id)->value('user_id');

        if ($user_id != $post_user_id) {
            return response()->json(['error' => 'Vi niste korisnik koji je kreirao ovaj post!'], 403);
        }

        $post = Post::findOrFail($id);

        $post->update(['content' => $request->input('content')]);

        return response()->json(['message' => 'Content datog posta je uspešno izmenjen!', new PostResource($post)]);
    }

    // Brisanje posta
    public function destroy($id)
    {
        $user_id = Auth::user()->id;
        $post_user_id = Post::where('id', $id)->value('user_id');

        if ($user_id != $post_user_id) {
            return response()->json(['error' => 'Vi niste korisnik koji je kreirao ovaj post!'], 403);
        }

        $post = Post::findOrFail($id);
        $post->delete();

        return response()->json('Uspešno obrisan post!');
    }
}
