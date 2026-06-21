// src/pages/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects, profile } from '../data/portfolioData.js';
import NotFound from './NotFound.jsx';
import styles from './ProjectDetail.module.css';

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  // Unknown project id — render the 404 page rather than a blank screen
  if (!project) return <NotFound />;

  return (
    <motion.div
      className={`${styles.page} container`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Helmet>
        <title>{`${project.title} | ${profile.name}`}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <Link to="/" className={styles.backLink}>
        <FiArrowLeft aria-hidden="true" /> Back to all projects
      </Link>

      <header className={styles.header}>
        <span className={styles.eyebrow}>{project.year}</span>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.tagline}>{project.tagline}</p>
      </header>

      <div className={`${styles.thumb} glass`}>
        {project.image ? (
          <img src={project.image} alt={`${project.title} screenshot`} />
        ) : (
          <div className={styles.thumbPlaceholder}>
            <span>{project.title} — screenshot coming soon</span>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <section>
          <h2>Overview</h2>
          <p>{project.description}</p>
        </section>

        <section>
          <h2>Tech Stack</h2>
          <ul className={styles.tagList}>
            {project.techStack.map((t) => (
              <li key={t} className={styles.tag}>
                {t}
              </li>
            ))}
          </ul>
        </section>

        {project.features?.length > 0 && (
          <section>
            <h2>Key Features</h2>
            <ul className={styles.featureList}>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
        )}

        <div className={styles.actions}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
          >
            <FiGithub aria-hidden="true" /> View on GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              <FiExternalLink aria-hidden="true" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectDetail;
