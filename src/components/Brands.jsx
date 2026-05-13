import { motion } from "framer-motion";

/* ── SVG Wordmark Logos ── */
const LOGOS = [
  {
    name: "Google",
    svg: (
      <svg viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-svg">
        <text x="0" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="22" fill="currentColor" letterSpacing="-0.5">Google</text>
      </svg>
    ),
  },
  {
    name: "Shopify",
    svg: (
      <svg viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-svg">
        <text x="0" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="22" fill="currentColor" letterSpacing="-0.5">Shopify</text>
      </svg>
    ),
  },
  {
    name: "Stripe",
    svg: (
      <svg viewBox="0 0 72 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-svg">
        <text x="0" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="22" fill="currentColor" letterSpacing="-0.5">Stripe</text>
      </svg>
    ),
  },
  {
    name: "Slack",
    svg: (
      <svg viewBox="0 0 65 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-svg">
        <text x="0" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="22" fill="currentColor" letterSpacing="-0.5">Slack</text>
      </svg>
    ),
  },
  {
    name: "HubSpot",
    svg: (
      <svg viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-svg">
        <text x="0" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="22" fill="currentColor" letterSpacing="-0.5">HubSpot</text>
      </svg>
    ),
  },
  {
    name: "Notion",
    svg: (
      <svg viewBox="0 0 75 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-svg">
        <text x="0" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="22" fill="currentColor" letterSpacing="-0.5">Notion</text>
      </svg>
    ),
  },
  {
    name: "Figma",
    svg: (
      <svg viewBox="0 0 60 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-svg">
        <text x="0" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="22" fill="currentColor" letterSpacing="-0.5">Figma</text>
      </svg>
    ),
  },
  {
    name: "Vercel",
    svg: (
      <svg viewBox="0 0 72 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-svg">
        <text x="0" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="22" fill="currentColor" letterSpacing="-0.5">Vercel</text>
      </svg>
    ),
  },
];

function MarqueeRow({ reverse = false }) {
  const items = [...LOGOS, ...LOGOS, ...LOGOS];
  return (
    <div className="brands-row">
      <div className={`brands-track ${reverse ? "brands-track-reverse" : ""}`}>
        {items.map((logo, i) => (
          <div key={i} className="brands-item">
            <span className="brands-logo">{logo.svg}</span>
            <span className="brands-divider">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Brands() {
  return (
    <section className="brands-section">
      <div className="brands-header">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="brands-label"
        >
          <div className="brands-label-line" />
          <span>Trusted By</span>
          <div className="brands-label-line" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="brands-heading"
        >
          Brands That Choose Us to
          <br />
          <em>Build Their Digital Future</em>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="brands-sub"
        >
          From local startups to global platforms — businesses trust us to deliver.
        </motion.p>
      </div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="brands-marquee-wrap"
      >
        <MarqueeRow />
        <MarqueeRow reverse />
      </motion.div>
    </section>
  );
}
