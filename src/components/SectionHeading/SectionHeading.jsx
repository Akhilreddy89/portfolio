// src/components/SectionHeading/SectionHeading.jsx
import { motion } from 'framer-motion';
import styles from './SectionHeading.module.css';

/**
 * Every section opens with this. The eyebrow is styled as a self-closing
 * JSX tag (e.g. "<Skills />") — a small, deliberate nod to the fact that
 * this entire site, and the person it belongs to, is built in React.
 */
function SectionHeading({ tag, title, subtitle, align = 'left' }) {
  return (
    <motion.div
      className={`${styles.wrapper} ${align === 'center' ? styles.center : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <span className={styles.eyebrow} aria-hidden="true">
        {`<${tag} />`}
      </span>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
}

export default SectionHeading;
