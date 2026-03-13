import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './oldnavbar.css';
export default function OldNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { to: "/#home", label: "Home" },
    { to: "/events", label: "Events" },
    { to: "/about", label: "About" },
    { to: "/booking", label: "Booking" },
    { to: "/photos", label: "Photos" },
    { to: "/#faq", label: "FAQ" },
  ];

  const topLinks = navLinks.slice(0, 3);
  const bottomLinks = navLinks.slice(3);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {windowWidth > 750 && (
        <div className="nav-content">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {windowWidth <= 750 && (
        <div className="two-row-nav-content">
          <ul className="nav-links">
            {topLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <ul className="nav-links-alt">
            {bottomLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}