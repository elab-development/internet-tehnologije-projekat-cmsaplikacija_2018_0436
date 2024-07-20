<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->resource->title,
            'content' => $this->resource->content,
            'extra' => $this->resource->content,
            'user_id' => new UserResource($this->resource->user),
            'category_id' => new CategoryResource($this->resource->lokacija),
            'published_at' =>  $this->resource->published_at,
        ];
    }
}