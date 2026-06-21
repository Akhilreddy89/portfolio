// src/components/Education/Education.jsx
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import { education } from '../../data/portfolioData.js';
import styles from './Education.module.css';

function Education() {
  return (
    <section id="education" className={`${styles.section} container`}>
      <SectionHeading tag="Education" title="Academic timeline" />

      <ol className={styles.timeline}>
        {education.map((edu, i) => (
          <motion.li
            key={edu.id}
            className={styles.item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
          >
            <span className={styles.dot} aria-hidden="true" />
            <div className={`${styles.card} glass`}>
              <span className={styles.period}>{edu.period}</span>
              <h3 className={styles.school}>{edu.school}</h3>
              <p className={styles.degree}>{edu.degree}</p>
              <p className={styles.detail}>{edu.detail}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

export default Education;
