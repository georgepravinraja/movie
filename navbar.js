import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar({ cartCount }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    <h3 style={{ color: 'maroon', fontSize: '40px' }}>MOVIES FUN</h3>
                </Link>
                <button className="nav-toggle" onClick={handleToggle}>
                    <i className={`fa ${isNavOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
                <ul className={`navlist ${isNavOpen ? 'open' : ''}`}>
                    <li>
                        <Link id="link1" to="/">Home</Link>
                    </li>
                    <li>
                        <Link id="link1" to="/movies">Movies</Link>
                    </li>
                    <li>
                        <Link id="link1" to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link id="link1" to="/about">About</Link>
                    </li>
                    <li className='car'>
                        <Link id="link1" to="/cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
