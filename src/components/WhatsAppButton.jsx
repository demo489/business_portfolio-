import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      href="https://wa.me/918290056936"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width="28"
        height="28"
      />
    </motion.a>
  );
}
