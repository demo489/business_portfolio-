import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  "Home",
  "Services",
  "Process",
  "Portfolio",
  "Testimonials",
  "FAQ",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (id) => {
    setActive(id);
    setOpen(false);
    // Restore scroll immediately so scrollTo works
    document.body.style.overflow = "";
    // Wait a tick for the menu to close, then scroll
    setTimeout(() => {
      const el = document.getElementById(id.toLowerCase());
      if (el) {
        const navbarHeight = 90;
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <button onClick={() => go("Home")} className="navbar-logo">
            <img
              src="/launchify_logo.svg"
              alt="Launchify"
              className="navbar-logo-img"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="navbar-nav">
            {NAV.map((n) => (
              <button
                key={n}
                onClick={() => go(n)}
                className={`navbar-link ${active === n ? "navbar-link-active" : ""}`}
              >
                {n}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => go("Contact")}
            className="navbar-cta hidden lg:block"
          >
            Get Started
          </motion.button>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="navbar-hamburger">
            <div className="navbar-hamburger-lines">
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="navbar-hamburger-line"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="navbar-hamburger-line"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="navbar-hamburger-line"
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="navbar-mobile"
          >
            <div className="navbar-mobile-content">
              {NAV.map((n) => (
                <button
                  key={n}
                  onClick={() => go(n)}
                  className="navbar-mobile-link"
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => go("Contact")}
                className="navbar-mobile-cta"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
