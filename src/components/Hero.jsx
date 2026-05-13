import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["Digital", "Modern", "Powerful", "Scalable"];
const MARQUEE = [
  "Web Development ○",
  "Software Development ○",
  "Video Editing ○",
  "SEO Optimization ○",
  "Digital Marketing ○",
  "UI/UX Design ○",
];

export default function Hero() {
  const [wIdx, setWIdx] = useState(0);
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const t = setInterval(() => setWIdx((i) => (i + 1) % WORDS.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="hero-futuristic">
      {/* Background gradient */}
      <div className="hero-gradient" />

      {/* Grid pattern */}
      <div className="hero-grid" />

      {/* Moving border line animation */}
      <div className="hero-moving-border">
        <div className="hero-border-line hero-border-top" />
        <div className="hero-border-line hero-border-right" />
        <div className="hero-border-line hero-border-bottom" />
        <div className="hero-border-line hero-border-left" />
      </div>

      {/* Floating orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Glowing line animation */}
      <div className="hero-glowing-line" />

      {/* Service icons floating upward */}
      <div className="hero-particles">
        <div
          className="hero-icon-particle"
          style={{ left: "10%", animationDelay: "0s" }}
        >
          {/* Business Website */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
          </svg>
        </div>
        <div
          className="hero-icon-particle"
          style={{ left: "25%", animationDelay: "2s" }}
        >
          {/* E-Commerce */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </div>
        <div
          className="hero-icon-particle"
          style={{ left: "40%", animationDelay: "1s" }}
        >
          {/* Booking System */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <div
          className="hero-icon-particle"
          style={{ left: "55%", animationDelay: "3s" }}
        >
          {/* SEO */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <path d="M11 8a3 3 0 0 0-3 3" />
          </svg>
        </div>
        <div
          className="hero-icon-particle"
          style={{ left: "70%", animationDelay: "0.5s" }}
        >
          {/* Maintenance */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hero-badge"
          >
            <span className="hero-badge-dot" />
            <span>Available for Projects · Web Development Agency</span>
          </motion.div>

          {/* Headline */}
          <div className="hero-headline">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hero-title"
            >
              We Build
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hero-word-wrapper"
            >
              <AnimatePresence mode="wait">
                <motion.h1
                  key={wIdx}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="hero-title hero-title-italic"
                >
                  {WORDS[wIdx]}
                </motion.h1>
              </AnimatePresence>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hero-title"
            >
              Products.
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hero-subtitle"
          >
            Expert websites & digital solutions for startups and local
            businesses across India — that attract customers and grow revenue
            every single day.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hero-cta"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => go("contact")}
              className="hero-btn-primary"
            >
              Start Your Project →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => go("portfolio")}
              className="hero-btn-secondary"
            >
              View Our Work
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="hero-marquee"
      >
        <div className="hero-marquee-track">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="hero-marquee-item">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
