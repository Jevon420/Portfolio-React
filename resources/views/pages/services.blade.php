@extends('layouts.app')

@section('title', 'Services - Your Portfolio')

@section('content')
<div id="services-content"></div>
@endsection

@push('scripts')
<script>
    document.addEventListener('DOMContentLoaded', () => {
        ReactDOM.render(
            React.createElement(Services),
            document.getElementById('services-content')
        );
    });
</script>
@endpush

