import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './oldnavbar.css';

export default function OldNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

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
    { href: './#home', label: 'Home' },
    { href: './#events', label: 'Events' },
    { href: '/about', label: 'About' },
    { href: '/booking', label: 'Booking' },
    { href: '/photos', label: 'Photos' },
    { href: './#faq', label: 'FAQ' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('./#') && window.location.pathname === '/') {
      e.preventDefault(); /* prevents default scroll behavior */
      const elementId = href.substring(3);
      const element = document.getElementById(elementId);
      if (element) {
        const offsetTop = element.offsetTop - 75;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        console.log("test");
      }
    } else {
      navigate(href);
      console.log("navigating to:", href);
    }
  };

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
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
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
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="nav-links-alt">
            {bottomLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
