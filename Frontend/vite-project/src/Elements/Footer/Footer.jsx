import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer_text">
        © {new Date().getFullYear()} Sadeepa-D. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;