// src/components/GithubStats/GithubStats.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiFolder, FiZap, FiCode } from 'react-icons/fi';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import { githubStats, profile } from '../../data/portfolioData.js';
import styles from './GithubStats.module.css';

const statCards = [
  { icon: FiFolder, label: 'Public Repositories', value: githubStats.totalRepos },
  { icon: FiZap, label: 'Current Streak', value: `${githubStats.currentStreak} days` },
  { icon: FiCode, label: 'Top Languages', value: githubStats.topLanguages.join(', ') },
];

function GithubStats() {
  return (
    <section id="github-stats" className={`${styles.section} container`}>
      <SectionHeading
        tag="GitHub"
        title="What I've been shipping"
        subtitle="A live look at my GitHub activity."
      />

      <div className={styles.grid}>
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={`${styles.statCard} glass`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <stat.icon size={22} className={styles.statIcon} aria-hidden="true" />
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/*
        Contribution graph placeholder.
        To go live, either:
        1) Embed an image card: <img src={`https://github-readme-stats.vercel.app/api?username=${githubStats.username}&show_icons=true`} alt="GitHub stats" />
        2) Or fetch the GitHub REST/GraphQL API client-side and render your own chart.
      */}
      <motion.div
        className={`${styles.graphCard} glass`}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45, delay: 0.2 }}
      >
        <div className={styles.graphPlaceholder}>
          <FiGithub size={28} aria-hidden="true" />
          <p>Contribution graph goes here</p>
          <span>Wire this up to the GitHub API or an embeddable stats card</span>
        </div>
        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewProfileLink}
        >
          View full GitHub profile →
        </a>
      </motion.div>
    </section>
  );
}

export default GithubStats;
