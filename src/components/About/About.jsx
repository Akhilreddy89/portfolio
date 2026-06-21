import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import { about } from '../../data/portfolioData.js';
import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={`${styles.section} container`}>
      <h3 style={{ paddingBottom: '10px' }}>About Me</h3>
      {/* <SectionHeading tag="About" title={about.heading} /> */}

      <div className={styles.layout}>
        <div className={styles.text}>
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.ul
          className={`${styles.highlights} glass`}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          {about.highlights.map((h) => (
            <li key={h.label} className={styles.highlightItem}>
              <span className={styles.highlightLabel}>{h.label}</span>
              <span className={styles.highlightValue}>{h.value}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export default About;
