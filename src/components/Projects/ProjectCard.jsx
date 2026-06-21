// src/components/Projects/ProjectCard.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import styles from './Projects.module.css';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`${styles.card} glass`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className={styles.thumb}>
        {/* Replace with: <img src={project.image} alt={`${project.title} screenshot`} /> */}
        {project.image ? (
          <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
        ) : (
          <div className={styles.thumbPlaceholder} aria-hidden="true">
            <span>{project.title}</span>
          </div>
        )}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <span className={styles.year}>{project.year}</span>
        </div>

        <p className={styles.cardTagline}>{project.tagline}</p>
        <p className={styles.cardDescription}>{project.description}</p>

        <ul className={styles.techList} aria-label={`${project.title} tech stack`}>
          {project.techStack.map((t) => (
            <li key={t} className={styles.techTag}>
              {t}
            </li>
          ))}
        </ul>

        <div className={styles.cardFooter}>
          <Link to={`/projects/${project.id}`} className={styles.detailsLink}>
            View details <FiArrowUpRight aria-hidden="true" />
          </Link>

          <div className={styles.cardActions}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              aria-label={`${project.title} GitHub repository`}
            >
              <FiGithub size={18} />
            </a>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconBtn}
                aria-label={`${project.title} live demo`}
              >
                <FiExternalLink size={18} />
              </a>
            ) : (
              <span
                className={`${styles.iconBtn} ${styles.iconBtnDisabled}`}
                title="Live demo coming soon"
              >
                <FiExternalLink size={18} />
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
