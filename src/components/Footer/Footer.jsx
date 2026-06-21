// src/components/Footer/Footer.jsx
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { profile } from '../../data/portfolioData.js';
import styles from './Footer.module.css';

const socialLinks = [
  { href: profile.social.github, icon: FiGithub, label: 'GitHub' },
  { href: profile.social.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
  { href: profile.social.leetcode, icon: SiLeetcode, label: 'LeetCode' },
  { href: `mailto:${profile.email}`, icon: FiMail, label: 'Email' },
].filter((link) => link.href);

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <span className={styles.logo}>{'<Akhil />'}</span>

        <ul className={styles.socials}>
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={link.label}
                className={styles.socialIcon}
              >
                <link.icon size={18} />
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.copyright}>
          © {year} {profile.fullName}. Built with React &amp; Framer Motion.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
