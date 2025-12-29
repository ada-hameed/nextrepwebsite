import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Hamburger animation classes
  const hamburgerClass = menuOpen ? "hamburger active" : "hamburger";

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-glass">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-3 col-6">
              <div className="logo">
                <Link to="/home" className="logo-link" onClick={handleNavClick}>
                  <img src="assets/img/NextRepWebsite2.png" alt="Fitness" className="logo-img" />
                </Link>
              </div>
            </div>

            <div className="col-xl-10 col-lg-10 col-md-9 col-6">
              <div className="menu-main d-flex align-items-center justify-content-end">
                {/* Desktop Menu */}
                <nav className="main-menu d-none d-lg-block">
                  <ul id="navigation" className="nav-list">
                    <li className={pathname === '/home' ? 'active' : ''}>
                      <Link to="/home">Home</Link>
                    </li>
                    <li className={pathname === '/about' ? 'active' : ''}>
                      <Link to="/about">About</Link>
                    </li>
                    <li className={pathname === '/services' ? 'active' : ''}>
                      <Link to="/services">Services</Link>
                    </li>
                    <li className={pathname === '/plans' ? 'active' : ''}>
                      <Link to="/plans">Plans</Link>
                    </li>
                    <li className={pathname === '/contact' ? 'active' : ''}>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>

                {/* Hamburger Icon */}
                <button
                  className={hamburgerClass + " d-lg-none"}
                  aria-label="Open menu"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="col-12 d-lg-none">
              <div className={`mobile_menu_glass${menuOpen ? " show" : ""}`}>
                <ul className="nav flex-column p-3 m-0">
                  <li className="nav-item">
                    <Link to="/home" className={`nav-link${pathname === '/home' ? ' active' : ''}`} onClick={handleNavClick}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className={`nav-link${pathname === '/about' ? ' active' : ''}`} onClick={handleNavClick}>
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/services" className={`nav-link${pathname === '/services' ? ' active' : ''}`} onClick={handleNavClick}>
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/plans" className={`nav-link${pathname === '/plans' ? ' active' : ''}`} onClick={handleNavClick}>
                      Plans
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className={`nav-link${pathname === '/contact' ? ' active' : ''}`} onClick={handleNavClick}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Mobile Menu */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;