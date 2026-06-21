// src/components/Projects/Projects.jsx
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../../data/portfolioData.js';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section id="projects" className={`${styles.section} container`}>
      <SectionHeading
        tag="Projects"
        title="Things I've built"
        subtitle="A couple of projects where I took an idea from a blank repo to something working end-to-end."
      />

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
