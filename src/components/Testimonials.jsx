import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    company: "TechFlow Inc.",
    photo: "/testimonial_1.jpg",
    review: "Absolutely incredible work! They transformed our outdated website into a modern, high-converting platform. Our conversion rates increased by 40% within the first month.",
  },
  {
    name: "Michael Chen",
    company: "Spice Garden Restaurant",
    photo: "/testimonial_2.jpg",
    review: "The team delivered beyond expectations. Our online ordering system is seamless, and customer feedback has been overwhelmingly positive. Highly recommended!",
  },
  {
    name: "Emily Rodriguez",
    company: "FitPro Studio",
    photo: "/testimonial_3.jpg",
    review: "Professional, creative, and detail-oriented. They understood our vision perfectly and brought it to life. Our membership sign-ups have skyrocketed since launch.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section ref={ref} id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="testimonials-header"
        >
          <div className="testimonials-label">
            <span className="testimonials-label-dot" />
            <span>Testimonials</span>
          </div>
          <h2 className="testimonials-title">
            What Our <span className="testimonials-title-highlight">Clients Say</span>
          </h2>
          <p className="testimonials-subtitle">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="testimonials-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="testimonial-card"
            >
              {/* Quote Icon */}
              <div className="testimonial-quote">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01699C9.01699 14.3431 10.36 13 12.017 13H14.017V7H12.017C8.151 7 5.01699 10.134 5.01699 14V21H14.017ZM21.017 21L21.017 18C21.017 16.8954 20.1216 16 19.017 16H16.017C16.017 14.3431 17.36 13 19.017 13H21.017V7H19.017C15.151 7 12.017 10.134 12.017 14V21H21.017Z" />
                </svg>
              </div>

              {/* Review Text */}
              <p className="testimonial-review">
                {TESTIMONIALS[currentIndex].review}
              </p>

              {/* Client Info */}
              <div className="testimonial-client">
                <div className="testimonial-photo">
                  <div className="testimonial-avatar">
                    {TESTIMONIALS[currentIndex].name.charAt(0)}
                  </div>
                </div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{TESTIMONIALS[currentIndex].name}</h4>
                  <p className="testimonial-company">{TESTIMONIALS[currentIndex].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="testimonials-nav">
            <button
              onClick={prevTestimonial}
              className="testimonials-nav-btn"
              aria-label="Previous testimonial"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>

            {/* Dots */}
            <div className="testimonials-dots">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`testimonials-dot ${index === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="testimonials-nav-btn"
              aria-label="Next testimonial"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
