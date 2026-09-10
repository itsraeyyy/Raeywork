import { setupGitHub } from './github.9643cd2c.cache.js';
import { setupBranding } from './branding.81600bc0.cache.js';
import { setupMessage } from './message.fb960a6d.cache.js';
import { setupTypography } from './typography.37cd528f.cache.js';
import { setupActions } from './actions.179e42f1.cache.js';
import { setupSectionHeadings, setupContentGroups } from './layout.8be03ac6.cache.js';
import { setupCreativeMode } from './creative.db9d9e89.cache.js';
import { setupPortraitStyles } from './portrait-styles.83085e1c.cache.js';
import { content } from './config.5489ba27.cache.js';
import { setupContact } from './contact.1c5ba694.cache.js';
import { createReveals } from './motion.fffbb0a9.cache.js';
import { loadCreativePreferences, setupCreativeCustomizer } from './customizer.3f3c5e06.cache.js';

// Enhance content first, then group it before measuring or animating. No build step.
try {
  setupBranding();
  loadCreativePreferences();
  setupContact(content);
  setupTypography();
  setupMessage(content);
  if (content.github.enabled) await setupGitHub(content.github);
  setupSectionHeadings();
  setupContentGroups();
  setupCreativeMode();
  setupPortraitStyles();
  setupActions();
  let fontTimer;
  await Promise.race([document.fonts.ready, new Promise(resolve => { fontTimer = setTimeout(resolve, 3000); })]);
  clearTimeout(fontTimer);
  // Do not spend the entrance in a background tab before the visitor sees it.
  if (document.hidden) await new Promise(resolve => {
    const visible = () => {
      if (document.hidden) return;
      document.removeEventListener('visibilitychange', visible);
      resolve();
    };
    document.addEventListener('visibilitychange', visible);
  });
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const reveals = createReveals({ reducedMotion });
  setupCreativeCustomizer({ reveals, reducedMotion });
} catch (error) {
  document.querySelectorAll('[data-reveal-pending]').forEach(target => target.removeAttribute('data-reveal-pending'));
  console.error('Preview enhancement unavailable; showing the original page.', error);
} finally {
  document.documentElement.classList.remove('portfolio-boot');
}
