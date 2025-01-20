import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import HomePage from './Pages/HomePage';
import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails';
import SalePage from './Pages/SalePage';

const UserDashboard = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default Route to Homepage */}
        <Route path="/" element={<HomePage />} />
        {/* Routes for Product Details and Cart */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default UserDashboard;
