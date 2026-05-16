import { motion } from "framer-motion";

export default function Card({ children, className = "" }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`executive-card p-6 ${className}`}
    >
      {children}
    </motion.article>
  );
}
