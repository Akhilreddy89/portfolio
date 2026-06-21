// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <motion.div
      className={`${styles.page} container`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Helmet>
        <title>Page Not Found | Akhil Reddy</title>
      </Helmet>
      <span className={styles.code}>{'<404 />'}</span>
      <h1>This page doesn&#x2019;t exist</h1>
      <p>The page you&#x2019;re looking for may have been moved or never existed.</p>
      <Link to="/" className={styles.homeLink}>
        Back to home
      </Link>
    </motion.div>
  );
}

export default NotFound;
