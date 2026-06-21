
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks } from '../../data/portfolioData.js';
import { scrollToSection } from '../../utils/scrollTo.js';
import { useScrollSpy, useScrollPast } from '../../hooks/useScrollSpy.js';
import styles from './Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollPast(40);
  const activeId = useScrollSpy(navLinks.map((l) => l.hash));
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (hash) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      // Navigate home first, then let the browser settle before scrolling
      navigate('/');
      setTimeout(() => scrollToSection(hash), 100);
    } else {
      scrollToSection(hash);
    }
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.inner} container`} aria-label="Primary">
        <button
          className={styles.logo}
          onClick={() => handleNavClick('hero')}
          aria-label="Go to top"
        >
          Akhil Reddy
        </button>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.hash}>
              <button
                className={`${styles.link} ${activeId === link.hash ? styles.active : ''}`}
                onClick={() => handleNavClick(link.hash)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          >
            {navLinks.map((link) => (
              <li key={link.hash}>
                <button
                  className={`${styles.mobileLink} ${activeId === link.hash ? styles.active : ''}`}
                  onClick={() => handleNavClick(link.hash)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
