import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Hambuger menu icon
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

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-logo">
        <a href="/">Asmaa Alaghbari</a>
      </div>
      <div className="navbar-toggle" onClick={handleToggle}>
        <RxHamburgerMenu />
      </div>
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/experience">Experience</a>
        </li>
        <li>
          <a href="/education">Education</a>
        </li>
        <li>
          <a href="/language">Language</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
