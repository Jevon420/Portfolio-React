import './bootstrap';
import '../css/app.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import MyAccount from './pages/MyAccount';

// Make React and ReactDOM globally available
window.React = React;
window.ReactDOM = ReactDOM;

// Export all components
export {
    Home,
    Services,
    Testimonials,
    Portfolio,
    About,
    Contact,
    MyAccount
};

