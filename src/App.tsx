import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ApiDemo from './pages/ApiDemo';
import Benefits from './pages/Benefits';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/api-demo" element={<ApiDemo />} />
          <Route path="/benefits" element={<Benefits />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;