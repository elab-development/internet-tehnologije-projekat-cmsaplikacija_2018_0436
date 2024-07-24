<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Resources\CategoryResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    // Prikaz svih kategorija
    public function index()
    {
        $categories = Category::all();
        return CategoryResource::collection($categories);
    }

    // Prikazivanje pojedinačne kategorije
    public function show($id)
    {
        $category = Category::findOrFail($id);
        return new CategoryResource($category);
    }

    // Unos nove kategorije
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:categories|max:255',
            'slug' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors);
        }

        $category = new Category();
        $category->name = $request->name;
        $category->slug = $request->slug;
        $category->description = $request->description;
        $category->save();

        return response()->json(['Uspešno kreirana nova kategorija!', new CategoryResource($category)]);
    }

    // Ažuriranje informacija o kategoriji
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:categories,name,' . $id . '|max:255',
            'slug' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors);
        }

        $category = Category::findOrFail($id);
        $category->name = $request->name;
        $category->slug = $request->slug;
        $category->description = $request->description;
        $category->save();

        return response()->json(['Uspešno ažurirana kategorija!', new CategoryResource($category)]);
    }

    // Ažuriranje samo opisa kategorije
    public function updateDescription(Request $request, $id)
    {
        $request->validate([
            'description' => 'required|string'
        ]);


        $category = Category::findOrFail($id);
        $category->update(['description' => $request->input('description')]);

        return response()->json(['message' => 'Opis date kategorije je uspešno izmenjen!', new CategoryResource($category)]);
    }

    // Brisanje kategorije
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return response()->json('Uspešno obrisana kategorija!');
    }
}
