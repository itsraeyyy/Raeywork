/** Three portrait treatments share the original nine-direction gaze driver. */
export function setupPortraitStyles() {
  const portrait = document.querySelector('#portrait');
  if (!portrait) return;
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const originalLabel = portrait.getAttribute('aria-label');
  const styles = [
    { name: 'Original' },
    { name: 'Cartoon', light: '/assets/images/portfolio/portrait-cartoon-light-v3.51017e5a.cache.webp', dark: '/assets/images/portfolio/portrait-cartoon-dark-v3.a2708198.cache.webp' },
    { name: 'Watercolor', light: '/assets/images/portfolio/portrait-watercolor-light-v2.8c1c02ea.cache.webp', dark: '/assets/images/portfolio/portrait-watercolor-dark-v2.ae1606f0.cache.webp' },
  ];
  const poses = { center: [50,50], right: [100,50], 'down-right': [100,100], down: [50,100], 'down-left': [0,100], left: [0,50], 'up-left': [0,0], up: [50,0], 'up-right': [100,0] };
  const frameNames = ['up-left', 'up', 'up-right', 'left', 'center', 'right', 'down-left', 'down', 'down-right'];
  const registration = {
    Original: { cell: 240, anchors: [[124.5,20,158],[119.5,20,162],[112.5,20,159],[119,18,166],[117,17,169],[111,18,165],[116.5,15,172],[119,15,175],[115,16,171]] },
    OriginalDark: { cell: 240, anchors: [[129.5,23,168],[120,24,168],[111.5,24,167],[122.5,22,175],[116.5,23,178],[111,23,175],[116,20,187],[118.5,20,187],[117.5,20,185]] },
    Cartoon: { cell: 418, anchors: [[221.5,70,310],[209,73,313],[190,70,307],[211,52,292],[208,54,299],[192,51,293],[201,20,257],[206.5,25,271],[203,21,272]] },
    Watercolor: { cell: 418, anchors: [[239,48,328],[207,47,332],[198,48,329],[225,32,328],[207,32,332],[198,32,327],[211,15,316],[208,15,325],[199,15,320]] },
  };
  function framing(name, index) {
    const source = registration[name], target = registration.Original;
    const [sx, sy, sb] = source.anchors[index].map(value => value / source.cell);
    const [tx, ty, tb] = target.anchors[index].map(value => value / target.cell);
    const scale = (tb - ty) / (sb - sy);
    return `translate(${100 * (tx - (.5 + scale * (sx - .5)))}%, ${100 * (ty - (.5 + scale * (sy - .5)))}%) scale(${scale})`;
  }

  const originalCard = document.createElement('span');
  originalCard.className = 'portrait-card';
  originalCard.dataset.artwork = 'Original';
  originalCard.setAttribute('aria-hidden', 'true');
  [...portrait.querySelectorAll(':scope > .portrait-theme')].forEach(theme => originalCard.append(theme));
  portrait.prepend(originalCard);

  const cards = [originalCard];
  const layers = [];
  styles.slice(1).forEach(style => {
    const card = document.createElement('span');
    card.className = 'portrait-card';
    card.dataset.artwork = style.name;
    card.setAttribute('aria-hidden', 'true');
    for (const theme of ['light', 'dark']) {
      const layer = document.createElement('span');
      layer.className = 'portrait-style-layer';
      layer.dataset.theme = theme;
      layer.dataset.src = style[theme];
      layer.dataset.artwork = style.name;
      layer.setAttribute('aria-hidden', 'true');
      card.append(layer);
      layers.push(layer);
    }
    portrait.append(card);
    cards.push(card);
  });

  const storageKey = 'portfolio.portrait-style.v1';
  let selected = 0;
  try {
    const saved = localStorage.getItem(storageKey);
    selected = Math.max(0, styles.findIndex(style => style.name === (saved === 'Anime' ? 'Watercolor' : saved)));
  } catch { /* Storage is optional. */ }

  const decoded = new Map();
  function prepare(src) {
    if (!decoded.has(src)) {
      const image = new Image(); image.src = src;
      decoded.set(src, image.decode().then(() => {
        const layer = layers.find(candidate => candidate.dataset.src === src);
        layer.style.backgroundImage = `url("${src}")`;
        layer.dataset.ready = 'true';
      }).catch(error => { decoded.delete(src); throw error; }));
    }
    return decoded.get(src);
  }

  const active = () => root.dataset.creativeMode === 'on';
  function pose() {
    const name = reduced.matches || !poses[portrait.dataset.gaze] ? 'center' : portrait.dataset.gaze;
    const [x,y] = poses[name], index = frameNames.indexOf(name);
    layers.forEach(layer => {
      layer.style.backgroundPosition = `${x}% ${y}%`;
      layer.style.transform = framing(layer.dataset.artwork, index);
    });
    portrait.querySelector('.portrait-dark').style.transform = framing('OriginalDark', index);
  }

  function arrange() {
    cards.forEach((card, index) => {
      card.dataset.slot = index === selected ? 'front' : index === (selected + 1) % styles.length ? 'right' : 'left';
    });
  }

  function render() {
    const style = styles[selected];
    const editing = active();
    portrait.classList.toggle('is-style-picker', editing);
    portrait.setAttribute('role', editing ? 'button' : 'img');
    portrait.tabIndex = editing ? 0 : -1;
    portrait.setAttribute('aria-label', editing ? `Portrait style: ${style.name}. Tap to change style` : originalLabel);
    portrait.title = editing ? `${style.name} · Tap to change style` : '';
    arrange();
  }

  function rotate(step) {
    if (!active()) return;
    selected = (selected + step + styles.length) % styles.length;
    try { localStorage.setItem(storageKey, styles[selected].name); } catch { /* Storage is optional. */ }
    render();
  }

  portrait.addEventListener('click', () => rotate(1));
  portrait.addEventListener('keydown', event => {
    if (!active() || !['Enter',' '].includes(event.key)) return;
    event.preventDefault();
    rotate(1);
  });

  new MutationObserver(pose).observe(portrait, { attributes: true, attributeFilter: ['data-gaze'] });
  new MutationObserver(render).observe(root, { attributes: true, attributeFilter: ['data-theme','data-creative-mode'] });
  reduced.addEventListener('change', pose);
  layers.forEach(layer => { prepare(layer.dataset.src).catch(() => {}); });
  pose();
  render();
}
