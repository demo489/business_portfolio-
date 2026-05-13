import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const PROJECTS = [
  {
    title: "TechFlow SaaS",
    category: "SaaS Website",
    desc: "Modern SaaS platform with subscription management, analytics dashboard, and seamless user onboarding.",
    image: "/portfolio_clinic.png",
    caseStudy: {
      challenge:
        "TechFlow needed a scalable platform to manage subscriptions and provide real-time analytics to users.",
      solution:
        "Built a modern SaaS platform with React and Node.js, featuring a comprehensive dashboard, automated billing, and user management system.",
      results: [
        "40% increase in user engagement",
        "60% faster onboarding",
        "Reduced churn by 25%",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    },
  },
  {
    title: "Spice Garden",
    category: "Restaurant Website",
    desc: "Elegant restaurant site with online menu, table reservations, and integrated ordering system.",
    image: "/portfolio_restaurant.png",
    caseStudy: {
      challenge:
        "Spice Garden needed to digitize their operations and offer online ordering to compete with delivery platforms.",
      solution:
        "Created a beautiful restaurant website with online menu, real-time table reservations, and WhatsApp-integrated ordering system.",
      results: [
        "65% increase in online orders",
        "50% more table reservations",
        "Improved customer satisfaction",
      ],
      technologies: ["React", "Firebase", "WhatsApp API", "Google Maps"],
    },
  },
  {
    title: "FitPro Studio",
    category: "Fitness Website",
    desc: "Dynamic fitness platform with class schedules, trainer profiles, and membership management.",
    image: "/portfolio_gym.png",
    caseStudy: {
      challenge:
        "FitPro Studio needed a modern platform to manage memberships, classes, and showcase trainer expertise.",
      solution:
        "Developed a comprehensive fitness platform with class scheduling, membership management, trainer profiles, and transformation gallery.",
      results: [
        "45% increase in memberships",
        "30% more class bookings",
        "Enhanced brand visibility",
      ],
      technologies: ["React", "MongoDB", "Stripe", "Cloudinary"],
    },
  },
];

function ProjectCard({ project, index, onViewCaseStudy }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="portfolio-card"
    >
      {/* Image Container with Zoom */}
      <div className="portfolio-image-wrapper">
        <motion.div
          className="portfolio-image-inner"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="portfolio-image"
          />
        </motion.div>
        {/* Overlay on hover */}
        <motion.div
          className="portfolio-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="portfolio-content">
        <span className="portfolio-category">{project.category}</span>
        <h3 className="portfolio-title">{project.title}</h3>
        <p className="portfolio-description">{project.desc}</p>

        {/* View Case Study Button */}
        <motion.button
          whileHover={{ x: 6 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onViewCaseStudy(project)}
          className="portfolio-button"
        >
          View Case Study
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}

function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="modal-backdrop"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button onClick={onClose} className="modal-close">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Scroll Wrapper */}
        <div className="modal-scroll-wrapper">
          {/* Header */}
          <div className="modal-header">
            <span className="modal-category">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>

          {/* Image */}
          <div className="modal-image">
            <img src={project.image} alt={project.title} />
          </div>

          {/* Case Study Content */}
          <div className="modal-body">
            <div className="modal-section">
              <h3 className="modal-section-title">The Challenge</h3>
              <p className="modal-section-text">
                {project.caseStudy.challenge}
              </p>
            </div>

            <div className="modal-section">
              <h3 className="modal-section-title">Our Solution</h3>
              <p className="modal-section-text">{project.caseStudy.solution}</p>
            </div>

            <div className="modal-section">
              <h3 className="modal-section-title">Results</h3>
              <ul className="modal-results">
                {project.caseStudy.results.map((result, i) => (
                  <li key={i} className="modal-result-item">
                    <span className="modal-result-bullet">✓</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h3 className="modal-section-title">Technologies</h3>
              <div className="modal-tech">
                {project.caseStudy.technologies.map((tech, i) => (
                  <span key={i} className="modal-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);

  const onViewCaseStudy = (project) => {
    setSelectedProject(project);
  };

  const onCloseCaseStudy = () => {
    setSelectedProject(null);
  };

  return (
    <section ref={ref} id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="portfolio-header"
        >
          <div className="portfolio-label">
            <span className="portfolio-label-dot" />
            <span>Our Work</span>
          </div>
          <h2 className="portfolio-title">
            Featured{" "}
            <span className="portfolio-title-highlight">Case Studies</span>
          </h2>
          <p className="portfolio-subtitle">
            Real projects, real results — see how we've helped businesses grow.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onViewCaseStudy={onViewCaseStudy}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={onCloseCaseStudy}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
