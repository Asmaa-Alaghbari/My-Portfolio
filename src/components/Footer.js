import React from "react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer">
      <p>Copyright @ {currentYear} Asmaa Alaghbari. All rights reserved.</p>
    </footer>
  );
}
