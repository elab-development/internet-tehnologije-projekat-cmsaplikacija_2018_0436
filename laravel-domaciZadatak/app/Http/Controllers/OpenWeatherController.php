<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;

use Illuminate\Http\Request;

class OpenWeatherController extends Controller
{
    public function getCurrentWeather($city)
    {
        $apiKey = '2af35955a5e2786ac24e74ed7d6e0335';
        $response = Http::get("https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey");
        $weatherData = $response->json();

        return response()->json($weatherData);
    }
}
