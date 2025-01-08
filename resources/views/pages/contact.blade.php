@extends('layouts.app')

@section('title', 'Contact - Your Portfolio')

@section('content')
<div id="contact-content"></div>
@endsection

@push('scripts')
<script>
    document.addEventListener('DOMContentLoaded', () => {
        ReactDOM.render(
            React.createElement(Contact),
            document.getElementById('contact-content')
        );
    });
</script>
@endpush

