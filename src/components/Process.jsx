import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  {
    num: "01",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    title: "Discovery",
    description:
      "Deep dive into your goals, audience, and market to build the perfect foundation.",
  },
  {
    num: "02",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: "Planning",
    description:
      "Strategic roadmap, wireframes, and architecture aligned with your vision.",
  },
  {
    num: "03",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Development",
    description:
      "Clean code, pixel-perfect design, mobile-first build delivered without cutting corners.",
  },
  {
    num: "04",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    title: "Launch",
    description:
      "Go live with rigorous testing, optimization, and ongoing support for success.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="process" className="process-section">
      <div className="process-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="process-header"
        >
          <div className="process-label">
            <span className="process-label-dot" />
            <span>Our Process</span>
          </div>
          <h2 className="process-title">
            How We Bring Ideas{" "}
            <span className="process-title-highlight">to Life</span>
          </h2>
          <p className="process-subtitle">
            A streamlined 4-step approach designed for clarity, speed, and
            exceptional results.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="process-steps-wrapper">
          {/* Connecting Line */}
          <motion.div
            className="process-connecting-line"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Step Cards */}
          <div className="process-steps">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="process-step-card"
              >
                {/* Step Number Badge */}
                <div className="process-step-number">{step.num}</div>

                {/* Icon */}
                <div className="process-icon-wrapper">
                  <div className="process-icon">{step.icon}</div>
                </div>

                {/* Content */}
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-description">{step.description}</p>

                {/* Connector Dot */}
                {index < STEPS.length - 1 && (
                  <div className="process-connector-dot" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
