/** Local identity assets; the SVG embeds the existing black-and-white portrait. */
export function setupBranding() {
  const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.href = new URL('./favicon.beae3aec.cache.svg', import.meta.url).href;
  favicon.setAttribute('sizes', 'any');
  if (!favicon.isConnected) document.head.append(favicon);
}
