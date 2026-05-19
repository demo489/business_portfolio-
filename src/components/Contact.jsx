import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const CONTACT_INFO = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 82900 56936",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "hello@webcraftpro.in",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "Jaipur, India",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section ref={ref} id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <div className="contact-label">
            <span className="contact-label-dot" />
            <span>Contact</span>
          </div>
          <h2 className="contact-title">
            Let's <span className="contact-title-highlight">Connect</span>
          </h2>
          <p className="contact-subtitle">
            Have a project in mind? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="contact-info"
          >
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-subtitle">
              Reach out to us and we'll respond as soon as we can.
            </p>
            <div className="contact-details">
              {CONTACT_INFO.map((item, i) => (
                <div key={i} className="contact-detail-item">
                  <div className="contact-detail-icon">{item.icon}</div>
                  <div>
                    <div className="contact-detail-label">{item.label}</div>
                    <div className="contact-detail-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="contact-form-wrapper"
          >
            {sent ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="contact-success"
              >
                <div className="contact-success-icon">✓</div>
                <h3 className="contact-success-title">Message Sent!</h3>
                <p className="contact-success-text">
                  We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="contact-form">
                <div className="contact-form-group">
                  <label className="contact-form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={change}
                    required
                    placeholder="Your name"
                    className="contact-form-input"
                  />
                </div>
                <div className="contact-form-group">
                  <label className="contact-form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={change}
                    required
                    placeholder="your@email.com"
                    className="contact-form-input"
                  />
                </div>
                <div className="contact-form-group">
                  <label className="contact-form-label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={change}
                    placeholder="+91 82900 56936"
                    className="contact-form-input"
                  />
                </div>
                <div className="contact-form-group">
                  <label className="contact-form-label">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={change}
                    rows={4}
                    required
                    placeholder="Tell us about your project..."
                    className="contact-form-input"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="contact-submit"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
