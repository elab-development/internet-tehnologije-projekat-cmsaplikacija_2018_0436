<!-- resources/views/welcome.blade.php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Posts</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    
</head>
<body>
    <div class="container py-5">
        <h1 class="text-center mb-5">All Posts</h1>

        @if($posts->count())
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                @foreach($posts as $post)
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_960_720.jpg" alt="Generic Post Image" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">{{ $post->title }}</h5>
                                <p class="card-text">{{ \Illuminate\Support\Str::limit($post->content, 150) }}</p>
                                <p class="text-muted mb-1">Category: {{ $post->category->name ?? 'N/A' }}</p>
                                <p class="text-muted">Published at: {{ $post->published_at }}</p>
                            </div>
                        </div>
                    </div>
                @endforeach
                </div>

        
            <!-- Renderovanje linkova za paginaciju -->
            <div class="mt-4">
                {{ $posts->links('pagination::bootstrap-5') }}
            </div>
        @else
            <div class="alert alert-warning text-center">
                Nisu pronadjeni nijedni postovi.
            </div>
        @endif

    </div>

    <!-- Bootstrap JS and Popper.js -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>
