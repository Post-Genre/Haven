import { useState, useEffect } from 'react';
import './oldnavbar.css';

export default function OldNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle resize event
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#events', label: 'Events' },
    { href: '/about', label: 'About' },
    { href: '/bookings', label: 'Rentals' },
    { href: '/photos', label: 'Artists' },
    { href: '#faqs', label: 'FAQS' },
  ];

  const topLinks = navLinks.slice(0, 3);
  const bottomLinks = navLinks.slice(3);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Desktop Navigation - Single Row */}
      {windowWidth > 750 && (
        <div className="nav-content">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile Navigation - Two Rows */}
      {windowWidth <= 750 && (
        <div className="two-row-nav-content">
          <ul className="nav-links">
            {topLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <ul className="nav-links-alt">
            {bottomLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
