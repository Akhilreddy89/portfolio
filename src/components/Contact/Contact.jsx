// src/components/Contact/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import { profile } from '../../data/portfolioData.js';
import styles from './Contact.module.css';

const initialForm = { name: '', email: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';

  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please add a short message.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }

  return errors;
}

function Contact() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) {
      setErrors(validate({ ...values, [name]: value }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');

    // TODO: replace with a real submission — e.g. POST to your backend,
    // or a service like Formspree / EmailJS. Simulated here for the demo.
    setTimeout(() => {
      setStatus('success');
      setValues(initialForm);
      setTouched({});
    }, 900);
  };

  return (
    <section id="contact" className={`${styles.section} container`}>
      <SectionHeading
        tag="Contact"
        title="Let's build something together"
        subtitle="Have a project, an internship opening, or just want to talk tech? My inbox is open."
      />

      <div className={styles.layout}>
        <motion.div
          className={styles.infoColumn}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
        >
          <a href={`mailto:${profile.email}`} className={`${styles.infoCard} glass`}>
            <HiOutlineMail size={20} className={styles.infoIcon} aria-hidden="true" />
            <div>
              <span className={styles.infoLabel}>Email</span>
              <span className={styles.infoValue}>{profile.email}</span>
            </div>
          </a>

          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className={`${styles.infoCard} glass`}>
            <HiOutlinePhone size={20} className={styles.infoIcon} aria-hidden="true" />
            <div>
              <span className={styles.infoLabel}>Phone</span>
              <span className={styles.infoValue}>{profile.phone}</span>
            </div>
          </a>

          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.infoCard} glass`}
          >
            <FiLinkedin size={20} className={styles.infoIcon} aria-hidden="true" />
            <div>
              <span className={styles.infoLabel}>LinkedIn</span>
              <span className={styles.infoValue}>Connect with me</span>
            </div>
          </a>

          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.infoCard} glass`}
          >
            <FiGithub size={20} className={styles.infoIcon} aria-hidden="true" />
            <div>
              <span className={styles.infoLabel}>GitHub</span>
              <span className={styles.infoValue}>@{profile.social.github.split('/').pop()}</span>
            </div>
          </a>
        </motion.div>

        <motion.form
          className={`${styles.form} glass`}
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              placeholder="Your name"
            />
            {touched.name && errors.name && (
              <span id="name-error" className={styles.errorText} role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              placeholder="you@example.com"
            />
            {touched.email && errors.email && (
              <span id="email-error" className={styles.errorText} role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder="Tell me a bit about what you have in mind..."
            />
            {touched.message && errors.message && (
              <span id="message-error" className={styles.errorText} role="alert">
                {errors.message}
              </span>
            )}
          </div>

          <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Send Message'}
          </button>

          <div role="status" aria-live="polite">
            {status === 'success' && (
              <p className={styles.successText}>
                Thanks for reaching out — I&#x2019;ll get back to you soon!
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
