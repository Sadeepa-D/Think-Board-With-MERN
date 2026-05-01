import React from "react";
import { Heart, Code } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer_text">
        © {new Date().getFullYear()} Sadeepa-D. All rights reserved.
        <span className="footer_icons">
          <Code size={16} className="footer_icon" />
          Made with
          <Heart size={16} className="footer_icon heart_icon" />
        </span>
      </p>
    </footer>
  );
};

export default Footer;
