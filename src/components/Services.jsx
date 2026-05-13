import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    ),
    title: "Web Development",
    description: "Custom websites built with modern technologies for optimal performance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
      </svg>
    ),
    title: "Software Development",
    description: "Tailored software solutions to streamline your business operations.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 8-6 4"/>
        <path d="M2 8l6 4"/>
        <path d="M22 16l-6-4"/>
        <path d="M2 16l6-4"/>
        <path d="m12 2-6 4"/>
        <path d="m12 2 6 4"/>
        <path d="m12 22-6-4"/>
        <path d="m12 22 6-4"/>
        <path d="m12 16 4-8"/>
        <path d="m12 16-4-8"/>
        <path d="m12 8 4 8"/>
        <path d="m12 8-4 8"/>
      </svg>
    ),
    title: "Video Editing",
    description: "Professional video production and editing for engaging content.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.3-4.3"/>
        <path d="M9 11a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"/>
      </svg>
    ),
    title: "SEO Optimization",
    description: "Data-driven SEO strategies to boost your search rankings.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" x2="12" y1="22.08" y2="12"/>
      </svg>
    ),
    title: "Digital Marketing",
    description: "Comprehensive marketing campaigns to grow your online presence.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"/>
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/>
        <path d="M12 7v5l3 3"/>
      </svg>
    ),
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that delight and convert users.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="services" className="services-section">
      <div className="services-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="services-header"
        >
          <div className="services-label">
            <span className="services-label-dot" />
            <span>What We Do</span>
          </div>
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Complete digital solutions to grow your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="service-card"
            >
              {/* Icon */}
              <div className="service-icon-wrapper">
                <motion.div 
                  className="service-icon"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>
              </div>

              {/* Content */}
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              {/* Arrow indicator */}
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
