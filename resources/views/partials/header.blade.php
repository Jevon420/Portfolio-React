<header class="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
    <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
            <a href="{{ route('home') }}" class="flex items-center space-x-2">
                <span class="text-xl font-bold">Your Name</span>
                <span class="text-sm text-gray-600">Coding Car Enthusiast</span>
            </a>

            <nav class="hidden md:flex items-center space-x-8">
                <a href="{{ route('services') }}" class="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
                <a href="{{ route('testimonials') }}" class="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
                <a href="{{ route('portfolio') }}" class="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</a>
                <a href="{{ route('about') }}" class="text-gray-600 hover:text-blue-600 transition-colors">About</a>
                <a href="{{ route('my-account') }}" class="text-gray-600 hover:text-blue-600 transition-colors">My account</a>
                <a href="{{ route('login') }}" class="text-gray-600 hover:text-blue-600 transition-colors">Log in</a>
                <a href="{{ route('contact') }}" class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">Let's Build</a>
            </nav>

            <button class="md:hidden" id="mobile-menu-button">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>

        <nav class="md:hidden py-4 hidden" id="mobile-menu">
            <div class="flex flex-col space-y-4">
                <a href="{{ route('services') }}" class="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
                <a href="{{ route('testimonials') }}" class="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
                <a href="{{ route('portfolio') }}" class="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</a>
                <a href="{{ route('about') }}" class="text-gray-600 hover:text-blue-600 transition-colors">About</a>
                <a href="{{ route('my-account') }}" class="text-gray-600 hover:text-blue-600 transition-colors">My account</a>
                <a href="{{ route('login') }}" class="text-gray-600 hover:text-blue-600 transition-colors">Log in</a>
                <a href="{{ route('contact') }}" class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors inline-block text-center">Let's Build</a>
            </div>
        </nav>
    </div>
</header>

