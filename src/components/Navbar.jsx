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

  const go = (id) => {
    setActive(id);
    setOpen(false);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
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
