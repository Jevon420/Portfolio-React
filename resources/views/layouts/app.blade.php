<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'Your Portfolio')</title>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    @viteReactRefresh
    @vite(['resources/js/app.js'])
</head>
<body>
    <div id="app">
        @include('partials.header')
        
        <main>
            @yield('content')
        </main>

        @include('partials.footer')
    </div>
</body>
</html>

