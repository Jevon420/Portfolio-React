import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Providers } from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
//import Home from '@/app/Home/page';
import Services from '@/app/services/page';
import Testimonials from '@/app/testimonials/page';
import Portfolio from '@/app/portfolio/page';
import About from '@/app/about/page';
import Contact from '@/app/contact/page';
import MyAccount from '@/app/account/page';

import './app.css';

function App() {
  return (
    <Providers>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/services" element={<Services />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/account" element={<MyAccount />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Providers>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
