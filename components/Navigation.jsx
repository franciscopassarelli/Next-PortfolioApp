"use client"
import Link from 'next/link';
import { useState } from 'react';

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link href="/services" className="navbar-brand" style={{ color: 'dark', fontSize: '25px' }}>Francisco Passarelli</Link>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/about" className="nav-link"> (🇬🇧) About Me</Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link"> (🇪🇸) Sobre Mí</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
