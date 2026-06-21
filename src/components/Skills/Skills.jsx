// src/components/Skills/Skills.jsx
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import { skills } from '../../data/portfolioData.js';
import styles from './Skills.module.css';

const groupVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
};

function Skills() {
  return (
    <section id="skills" className={`${styles.section} container`}>
      <SectionHeading
        tag="Skills"
        title="Tools and technologies I work with"
        subtitle="A snapshot of what I reach for day-to-day, from UI to database."
      />

      <div className={styles.groups}>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className={`${styles.group} glass`}>
            <h3 className={styles.groupTitle}>{category}</h3>
            <motion.ul
              className={styles.badgeList}
              variants={groupVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              {items.map((skill) => (
                <motion.li key={skill} className={styles.badge} variants={badgeVariants}>
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
