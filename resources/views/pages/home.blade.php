@extends('layouts.app')

@section('title', 'Home - Your Portfolio')

@section('content')
<div id="home-content"></div>
@endsection

@push('scripts')
<script>
    document.addEventListener('DOMContentLoaded', () => {
        ReactDOM.render(
            React.createElement(Home),
            document.getElementById('home-content')
        );
    });
</script>
@endpush

