import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const FAQS = [
  {
    question: "How long does it take to complete a website project?",
    answer: "Timeline varies based on project complexity. A standard business website typically takes 4-6 weeks, while more complex projects like e-commerce or custom applications may take 8-12 weeks. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer competitive, transparent pricing based on project requirements. After understanding your needs, we provide a detailed quote with no hidden fees. We also offer flexible payment plans to accommodate different budgets.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive maintenance packages to keep your website secure, updated, and performing optimally. Our support includes regular backups, security updates, content updates, and technical assistance.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices - from smartphones to tablets to desktop computers.",
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer: "Yes, we provide SEO optimization as part of our web development process. We also offer comprehensive digital marketing services including SEO campaigns, social media marketing, and paid advertising to help grow your online presence.",
  },
  {
    question: "What technologies do you use?",
    answer: "We specialize in modern web technologies including React, Next.js, Node.js, and various CMS platforms. We choose the best technology stack based on your specific project requirements, scalability needs, and budget.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} id="faq" className="faq-section">
      <div className="faq-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="faq-header"
        >
          <div className="faq-label">
            <span className="faq-label-dot" />
            <span>FAQ</span>
          </div>
          <h2 className="faq-title">
            Frequently Asked <span className="faq-title-highlight">Questions</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about our services and process.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="faq-list">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="faq-item"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question"
                aria-expanded={openIndex === index}
              >
                <span className="faq-question-text">{faq.question}</span>
                <motion.div
                  className="faq-icon"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="faq-answer-wrapper"
              >
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
