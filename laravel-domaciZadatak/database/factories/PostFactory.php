<?php

namespace Database\Factories;
use App\Models\Post;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    protected $model = Post::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'content' => $this->faker->paragraphs(3, true), 
            'extra' => $this->faker->paragraphs(3, true),
            'user_id' => $this->faker->randomElement(\App\Models\User::pluck('id')->toArray()), // Ensure user_id is valid
            'category_id' => $this->faker->randomElement(Category::pluck('id')->toArray()), // Ensure category_id is valid
            'published_at' => now(),
        ];
    }
}
