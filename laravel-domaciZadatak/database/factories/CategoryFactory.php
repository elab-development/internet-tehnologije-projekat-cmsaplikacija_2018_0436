<?php

namespace Database\Factories;
use App\Models\Category;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
   protected $model = Category::class; 

    public function definition()
    {
        $name = $this->faker->word;
        return [
            'name' =>$this->faker->sentence($nbWords = 1, $variableNbWords = true),
            'slug' =>$this->faker->sentence($nbWords = 1, $variableNbWords = true),
            'description' =>$this->faker->sentence($nbWords = 3, $variableNbWords = true),
        ];
    }
}
