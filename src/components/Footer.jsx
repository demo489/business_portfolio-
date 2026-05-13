import { motion } from "framer-motion";

const LINKS = {
  Services: [
    "Business Website",
    "E-Commerce",
    "Booking System",
    "SEO",
    "Maintenance",
  ],
  Company: ["About Us", "Our Work", "Blog", "Careers", "Testimonials"],
  Legal: ["Privacy Policy", "Terms of Service", "Refund Policy"],
};

const SOCIAL = [
  { label: "Twitter", icon: <TwitterIcon />, href: "#" },
  { label: "LinkedIn", icon: <LinkedInIcon />, href: "#" },
  { label: "Instagram", icon: <InstagramIcon />, href: "#" },
  { label: "Facebook", icon: <FacebookIcon />, href: "#" },
];

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="footer-brand"
          >
            <div className="footer-logo">
              <img src="/launchify_logo.svg" alt="Launchify" />
            </div>
            <p className="footer-tagline">
              Building exceptional digital experiences that drive growth and
              success for businesses across India.
            </p>
            <div className="footer-social">
              {SOCIAL.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-link"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links], index) => (
            <motion.div
              key={heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="footer-links"
            >
              <h4 className="footer-heading">{heading}</h4>
              <ul className="footer-list">
                {links.map((link, i) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 0.2 + index * 0.1 + i * 0.05,
                      }}
                      whileHover={{ x: 4, color: "#C8873A" }}
                      className="footer-link"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="footer-bottom"
        >
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 Launchify. Crafted with passion in India 🇮🇳
            </p>
            <div className="footer-status">
              <span className="status-dot" />
              <span className="status-text">All systems operational</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient */}
      <div className="footer-gradient" />
    </footer>
  );
}
