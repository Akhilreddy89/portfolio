// src/components/Loader/Loader.jsx
import { motion } from 'framer-motion';
import styles from './Loader.module.css';

function Loader() {
  return (
    <motion.div
      className={styles.loader}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      role="status"
      aria-label="Loading site"
    >
      <motion.span
        className={styles.tag}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        {'<AkhilReddy />'}
      </motion.span>
      <span className={styles.srOnly}>Loading…</span>
    </motion.div>
  );
}

export default Loader;
