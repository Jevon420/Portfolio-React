@extends('layouts.app')

@section('title', 'Portfolio - Your Portfolio')

@section('content')
<div id="portfolio-content"></div>
@endsection

@push('scripts')
<script>
    document.addEventListener('DOMContentLoaded', () => {
        ReactDOM.render(
            React.createElement(Portfolio),
            document.getElementById('portfolio-content')
        );
    });
</script>
@endpush

