import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Hamburger menu icon
  const navbarRef = useRef(null); // Navbar reference for closing the menu

  // Toggle the menu
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when clicking outside the navbar
  const handleClickOutside = (e) => {
    if (navbarRef.current && !navbarRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-logo">
        <Link to="/" onClick={handleLinkClick}>
          Asmaa Alaghbari
        </Link>
      </div>
      <div className="navbar-toggle" onClick={handleToggle}>
        <RxHamburgerMenu />
      </div>
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={handleLinkClick}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/experience" onClick={handleLinkClick}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="/education" onClick={handleLinkClick}>
            Education
          </Link>
        </li>
        <li>
          <Link to="/language" onClick={handleLinkClick}>
            Language
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
