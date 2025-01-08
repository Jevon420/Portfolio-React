@extends('layouts.app')

@section('title', 'My Account - Your Portfolio')

@section('content')
<div id="my-account-content"></div>
@endsection

@push('scripts')
<script>
    document.addEventListener('DOMContentLoaded', () => {
        ReactDOM.render(
            React.createElement(MyAccount),
            document.getElementById('my-account-content')
        );
    });
</script>
@endpush

