// src/utils/scrollTo.js

/**
 * Smoothly scrolls to a section by id, accounting for the sticky navbar's
 * height so the section title isn't hidden underneath it.
 */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const navbarHeight = getComputedStyle(document.documentElement)
    .getPropertyValue('--navbar-height')
    .trim();
  const offset = parseInt(navbarHeight, 10) || 72;

  const top = el.getBoundingClientRect().top + window.scrollY - offset + 1;
  window.scrollTo({ top, behavior: 'smooth' });
}
