@extends('layouts.app')

@section('title', 'Testimonials - Your Portfolio')

@section('content')
<div id="testimonials-content"></div>
@endsection

@push('scripts')
<script>
    document.addEventListener('DOMContentLoaded', () => {
        ReactDOM.render(
            React.createElement(Testimonials),
            document.getElementById('testimonials-content')
        );
    });
</script>
@endpush

