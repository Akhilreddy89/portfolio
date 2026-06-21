
import { motion } from 'framer-motion';
import { HiArrowDown, HiOutlineMail } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';
import { profile } from '../../data/portfolioData.js';
import { scrollToSection } from '../../utils/scrollTo.js';
import styles from './Hero.module.css';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.inner} container`}>
        <motion.div
          className={styles.content}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={item} className={styles.eyebrow}>
            Welcome to my portfolio
          </motion.span>

          <motion.h1 variants={item} className={styles.name}>
            {profile.fullName}
          </motion.h1>

          <motion.h2 variants={item} className={styles.title}>
            <span className="gradientText">{profile.title}</span>
          </motion.h2>

          <motion.p variants={item} className={styles.tagline}>
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className={styles.ctaRow}>
            <button className={styles.primaryBtn} onClick={() => scrollToSection('projects')}>
              View Projects
            </button>
            <a
              className={styles.secondaryBtn}
              href={profile.resumeUrl}
              download
            >
              <FiDownload aria-hidden="true" /> Download Resume
            </a>
            <button className={styles.ghostBtn} onClick={() => scrollToSection('contact')}>
              <HiOutlineMail aria-hidden="true" /> Contact Me
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        >
          <div className={styles.imageGlow} aria-hidden="true" />
          <div className={`${styles.imageFrame} glass`}>
            {/* Replace this placeholder with: <img src="/profile.jpg" alt={profile.name} /> */}
            <div className={styles.imagePlaceholder} role="img" aria-label={`${profile.name}'s profile photo placeholder`}>
              {profile.name
                .split(' ')
                .map((w) => w[0])
                .join('')}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        className={styles.scrollHint}
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <HiArrowDown size={20} />
      </motion.button>
    </section>
  );
}

export default Hero;
