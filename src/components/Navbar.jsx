import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useScrollYPosition } from "react-use-scroll-position";
import "../styles/navbar.css";

function Navbar({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollYPosition();

  const stickeyTrigger = window.innerHeight / 2.75;

  return (
    <Container className="custom-navbar">
      <div
        className={`nav${scrollY > stickeyTrigger ? " nav-stickey" : ""}${
          menuOpen ? " nav-open" : ""
        }`}
      >
        <div className="nav-content">
          <div className="nav-logo">My App</div>

          <nav className="nav-links__container">
            {links &&
              links.map((link, i) => (
                <Link to={link.href} className="nav-link">
                  <div className="nav-link__text">{link.title}</div>
                  <div className="nav-link__background" />
                </Link>
              ))}
          </nav>

          <div
            className="nav-menu__icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div />
            <div />
          </div>
        </div>
      </div>
    </Container>
  );
}

Navbar.defaultProps = {
  links: [
    { title: "Home", href: "/" },
    { title: "About", href: "/" },
    { title: "Services", href: "/" },
    { title: "Contact Us", href: "contact-us" },
  ],
};

export default Navbar;
