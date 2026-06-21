//This is my main page like an entry point for my website
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../components/Hero/Hero.jsx';
import About from '../components/About/About.jsx';
import Skills from '../components/Skills/Skills.jsx';
import Projects from '../components/Projects/Projects.jsx';
import Education from '../components/Education/Education.jsx';
import GithubStats from '../components/GithubStats/GithubStats.jsx';
import Contact from '../components/Contact/Contact.jsx';
import { profile } from '../data/portfolioData.js';

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <Helmet>
        <title>{`${profile.name} | ${profile.title}`}</title>
        <meta name="description" content={profile.tagline} />
        <meta property="og:title" content={`${profile.name} | Full-Stack Developer`} />
        <meta property="og:description" content={profile.tagline} />
        <meta property="og:type" content="website" />

      </Helmet>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <GithubStats />
      <Contact />
    </motion.div>
  );
}

export default Home;
