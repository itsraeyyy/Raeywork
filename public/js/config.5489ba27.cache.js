/** Start here: content and animation values used by the local portfolio preview. */
export const content = {
  email: 'hello@raey.work',
  footer: 'From pixels to possibilities.',
  github: { enabled: false, username: 'raey', year: 2026 },
  message: { mode: 'preview', endpoint: '' },
};

// All times are milliseconds. Duration is PER UNIT, not per paragraph.
export const motion = {
  duration: 620,
  wordStagger: 20,
  lineStagger: 60,
  maxLineStagger: 240,
  blockGap: 120,
  row: { duration: 420, gap: 60, rise: 8 },
  book: { duration: 720, gap: 80, rise: 24 },
  componentRise: 14,
  easing: 'cubic-bezier(0.2, 0, 0, 1)',
  bookEasing: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
};

// Never target both a container and its children: that would animate them twice.
export const selectors = {
  words: '.intro-copy > p, #about .text-stack > p, #contact .text-stack > p',
  lines: '.name-block h1, .name-block .role, .section-heading h2, #contact h2',
  row: '.masthead > .place, .page-controls > *, .socials > a',
  book: '#book-lineup > article',
  component: '.github-content, .portrait-line, .intro-actions, .section-heading .section-aside, .work-item, #writing .section-intro, #about .section-actions > .text-link, #contact .email-link, #contact .colophon',
};
