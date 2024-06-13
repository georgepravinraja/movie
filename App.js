import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Movies from './movies';
import View from './view';
import Contact from './contact';
import Cart from './cart';
import Footer from './footer';
import About from './about';
import Navbar from './navbar';

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('userData', JSON.stringify({ ...JSON.parse(localStorage.getItem('userData')), isLoggedIn: true }));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    const userData = JSON.parse(localStorage.getItem('userData'));
    localStorage.setItem('userData', JSON.stringify({ ...userData, isLoggedIn: false }));
  };

  const handleClick = (item) => {
    const isItemInCart = cart.some(cartItem => cartItem.id === item.id);
    if (isItemInCart) {
      alert("This movie is already in the cart");
    } else {
      setCart([...cart, item]);
    }
  };

  return (
    <div className="App">
      {isLoggedIn && <Navbar cartCount={cart.length} />}  

      <main>
        <Routes>
          <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />} />
          <Route path="/movies" element={<Movies handleClick={handleClick} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/view/:_id" element={<View />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
