@extends('layouts.app')

@section('title', 'About - Your Portfolio')

@section('content')
<div id="about-content"></div>
@endsection

@push('scripts')
<script>
    document.addEventListener('DOMContentLoaded', () => {
        ReactDOM.render(
            React.createElement(About),
            document.getElementById('about-content')
        );
    });
</script>
@endpush

