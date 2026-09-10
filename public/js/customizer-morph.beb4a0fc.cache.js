/** A small liquid surface separates first; the settings then expand at natural scale. */
export function createCustomizerMorph({ toolbar, shell, panel, reducedMotion, motionEnabled }) {
  const ns = 'http://www.w3.org/2000/svg';
  const clamp = value => Math.max(0, Math.min(1, value));
  const mix = (from, to, amount) => from + (to - from) * amount;
  const smooth = (start, end, value) => {
    const amount = clamp((value - start) / (end - start));
    return amount * amount * (3 - 2 * amount);
  };
  const make = (name, attributes = {}) => {
    const element = document.createElementNS(ns, name);
    for (const [key, value] of Object.entries(attributes)) element.setAttribute(key, value);
    return element;
  };
  const filterId = `style-liquid-${Math.random().toString(36).slice(2)}`;
  const surface = make('svg', { class: 'creative-customizer-surface', 'aria-hidden': 'true' });
  const definitions = make('defs');
  const filter = make('filter', { id: filterId, filterUnits: 'userSpaceOnUse', 'color-interpolation-filters': 'sRGB' });
  const blur = make('feGaussianBlur', { in: 'SourceAlpha', stdDeviation: 0, result: 'soft' });
  const threshold = make('feColorMatrix', { in: 'soft', type: 'matrix', result: 'liquid' });
  // Build the fill and a one-pixel outline from the same alpha silhouette.
  // Source text is a separate HTML layer and never enters this filter.
  const outside = make('feMorphology', { in: 'liquid', operator: 'dilate', radius: '.5', result: 'outside' });
  const inside = make('feMorphology', { in: 'liquid', operator: 'erode', radius: '.5', result: 'inside' });
  const edge = make('feComposite', { in: 'outside', in2: 'inside', operator: 'out', result: 'edge' });
  const fill = make('feFlood', { 'flood-color': '#202020', result: 'fillColor' });
  const body = make('feComposite', { in: 'fillColor', in2: 'liquid', operator: 'in', result: 'body' });
  const outline = make('feFlood', { 'flood-color': '#ffffff', 'flood-opacity': '.14', result: 'edgeColor' });
  const stroke = make('feComposite', { in: 'edgeColor', in2: 'edge', operator: 'in', result: 'outline' });
  const merge = make('feMerge');
  merge.append(make('feMergeNode', { in: 'body' }), make('feMergeNode', { in: 'outline' }));
  filter.append(blur, threshold, outside, inside, edge, fill, body, outline, stroke, merge);
  definitions.append(filter);
  const shapes = make('g', { fill: '#202020', stroke: '#ffffff24', 'stroke-width': '1' });
  const pill = make('rect', { class: 'style-surface-pill' });
  const drop = make('rect', { class: 'style-surface-drop' });
  const neck = make('rect', { class: 'style-surface-neck' });
  shapes.append(pill, neck, drop);
  surface.append(definitions, shapes);
  shell.prepend(surface);
  // Remove the fallback transform before the first bounds measurement.
  shell.classList.add('has-morph');

  let progress = 0, target = 0, frame = 0, previousTime = 0, geometry;
  let velocity = 0, turnVelocity = 0, turnElapsed = 0;
  let openingWeight = 0, contentVisibility = 0;
  const turnDuration = .06;
  const speed = () => target ? 1 / .54 : -1 / .30;
  // Analytic damped step response: expansion carries momentum through its
  // destination and dissipates it. Width settles faster than height.
  const spring = (seconds, frequency, damping) => {
    if (seconds <= 0) return 0;
    const damped = frequency * Math.sqrt(1 - damping * damping);
    return 1 - Math.exp(-damping * frequency * seconds) *
      (Math.cos(damped * seconds) + damping * frequency / damped * Math.sin(damped * seconds));
  };
  const expansion = (t, frequency, damping) => {
    const response = spring((t - .48) * .76, frequency, damping);
    return mix(response, 1, smooth(.88, 1, t));
  };

  function rect(element, x, y, width, height, radius) {
    element.setAttribute('x', x);
    element.setAttribute('y', y);
    element.setAttribute('width', width);
    element.setAttribute('height', height);
    element.setAttribute('rx', radius);
  }

  function render() {
    if (!geometry) return;
    const { b, p } = geometry;
    const t = clamp(progress);
    const emerge = smooth(0, .20, t);
    const release = smooth(.10, .40, t);
    const widthResponse = expansion(t, 28, .82);
    const heightResponse = expansion(t, 24, .72);
    const widthGrowth = Math.min(1, widthResponse);
    const heightGrowth = Math.min(1, heightResponse);
    const center = b.x + b.w / 2;
    const budWidth = mix(22, Math.min(76, b.w * .64), emerge);
    const budHeight = mix(22, 48, emerge);
    const gap = Math.max(24, b.y - p.y - p.h);
    const emittedBottom = mix(b.y + b.h * .72, b.y + 5, emerge);
    const detachedBottom = mix(emittedBottom, b.y - gap, release);
    // Bound the elastic displacement in pixels, so a tall mobile panel never
    // gets a huge proportional bounce. Both dimensions share the same impulse.
    const heightExcess = Math.max(0, heightResponse - 1) * p.h;
    const widthExcess = Math.max(0, widthResponse - 1) * p.w;
    const lift = (8 * heightExcess / (8 + heightExcess)) * openingWeight;
    const stretch = (3 * widthExcess / (3 + widthExcess)) * openingWeight;
    const width = mix(budWidth, p.w, widthGrowth) + stretch;
    const height = mix(budHeight, p.h, heightGrowth) + lift;
    const x = mix(center - budWidth / 2, p.x, widthGrowth) - stretch / 2;
    const bottom = mix(detachedBottom, p.y + p.h, heightGrowth);
    const y = bottom - height;
    const radius = mix(Math.min(budWidth, budHeight) / 2, 24, heightGrowth);
    const recoilPhase = clamp((t - .12) / .44);
    const recoil = Math.sin(Math.PI * recoilPhase) ** 2 * openingWeight;
    rect(pill, b.x - recoil, b.y + recoil, b.w + 2 * recoil, b.h - recoil, b.h / 2);
    rect(drop, x, y, width, height, radius);
    drop.setAttribute('visibility', t === 0 ? 'hidden' : 'visible');

    // A real shared mass spans the gap while the bud pulls away. The filter
    // rounds its shoulders into both surfaces, then dissolves the thinning
    // middle into two receding tips. Proximity blur alone broke too early.
    const neckWidth = 24 * (1 - smooth(.32, .46, t));
    const neckTop = bottom - 14;
    rect(neck, center - neckWidth / 2, neckTop, neckWidth,
      Math.max(0, b.y + 14 - neckTop), neckWidth / 2);
    neck.setAttribute('visibility', t > 0 && t < .46 && bottom < b.y + 10 ? 'visible' : 'hidden');

    // Only the compact emission uses goo. Return the filter to identity before
    // the panel becomes large, then remove the offscreen filter allocation.
    const liquid = smooth(0, .075, t) * (1 - smooth(.46, .52, t));
    if (liquid > .0001) {
      shapes.setAttribute('filter', `url(#${filterId})`);
      shapes.setAttribute('stroke', 'none');
      blur.setAttribute('stdDeviation', 7 * liquid);
      const contrast = mix(1, 18, liquid);
      threshold.setAttribute('values', `0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ${contrast} ${-8.5 * liquid}`);
      const left = Math.min(b.x, x) - 24;
      const top = Math.min(b.y, y) - 24;
      filter.setAttribute('x', left);
      filter.setAttribute('y', top);
      filter.setAttribute('width', Math.max(b.x + b.w, x + width) - left + 24);
      filter.setAttribute('height', Math.max(b.y + b.h, bottom) - top + 24);
    } else {
      shapes.removeAttribute('filter');
      shapes.setAttribute('stroke', '#ffffff24');
    }

    const insetTop = Math.max(0, y - p.y);
    const insetRight = Math.max(0, p.x + p.w - x - width);
    const insetBottom = Math.max(0, p.y + p.h - bottom);
    const insetLeft = Math.max(0, x - p.x);
    panel.style.clipPath = `inset(${insetTop}px ${insetRight}px ${insetBottom}px ${insetLeft}px round ${radius}px)`;
    // Keep type still and readable. The surface is nearly full size before
    // content arrives; its position is independent of the clipping rectangle.
    const content = smooth(.68, .88, t) * contentVisibility;
    panel.style.setProperty('--style-content-opacity', content);
    panel.style.setProperty('--style-content-offset', `${(1 - content) * 8}px`);
    panel.classList.toggle('is-content-ready', Boolean(target) && t >= .98);
    panel.classList.toggle('is-motion-instant', reducedMotion.matches || !motionEnabled());
    panel.style.visibility = t > 0 ? 'visible' : 'hidden';
  }

  function measure() {
    if (toolbar.hidden) return;
    const button = toolbar.getBoundingClientRect();
    const bounds = panel.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight;
    const left = Math.max(0, Math.min(button.left, bounds.left) - 24);
    const top = Math.max(0, Math.min(button.top, bounds.top) - 24);
    const right = Math.min(viewportWidth, Math.max(button.right, bounds.right) + 24);
    const bottom = Math.min(viewportHeight, Math.max(button.bottom, bounds.bottom) + 24);
    const width = Math.max(1, right - left);
    const height = Math.max(1, bottom - top);
    surface.style.cssText = `left:${left}px;top:${top}px;width:${width}px;height:${height}px`;
    surface.setAttribute('viewBox', `0 0 ${width} ${height}`);
    geometry = {
      b: { x: button.left - left, y: button.top - top, w: button.width, h: button.height },
      p: { x: bounds.left - left, y: bounds.top - top, w: bounds.width, h: bounds.height },
    };
    render();
  }

  function tick(time) {
    const dt = previousTime ? Math.min((time - previousTime) / 1000, .032) : 1 / 60;
    previousTime = time;
    openingWeight = mix(openingWeight, target, 1 - Math.exp(-dt / .045));
    contentVisibility = mix(contentVisibility, target, 1 - Math.exp(-dt / (target ? .065 : .035)));
    const oldVelocity = velocity;
    turnElapsed += dt;
    velocity = mix(turnVelocity, speed(), smooth(0, turnDuration, turnElapsed));
    progress = clamp(progress + (oldVelocity + velocity) * .5 * dt);
    const finished = target ? progress >= 1 : progress <= 0;
    render();
    if (finished) {
      frame = 0;
      previousTime = 0;
      velocity = 0;
      openingWeight = target;
      contentVisibility = target;
      render();
      return;
    }
    frame = requestAnimationFrame(tick);
  }

  function setOpen(open, instant = false) {
    const next = Number(open);
    const immediate = instant || toolbar.hidden || reducedMotion.matches || !motionEnabled();
    if (next === target && (progress === target || !immediate)) return;
    target = next;
    if (immediate) {
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
      progress = target;
      velocity = 0;
      openingWeight = target;
      contentVisibility = target;
      if (!toolbar.hidden) measure();
      return;
    }
    // One time-based driver; reversing only turns the velocity over 60ms.
    // Geometry and content keep their current position through quick clicks.
    if (!frame) {
      openingWeight = target;
      velocity = speed();
      turnVelocity = velocity;
      turnElapsed = turnDuration;
      measure();
      frame = requestAnimationFrame(tick);
    } else {
      turnVelocity = velocity;
      turnElapsed = 0;
    }
  }

  const resize = new ResizeObserver(measure);
  resize.observe(toolbar);
  resize.observe(panel);
  window.addEventListener('resize', measure);
  window.visualViewport?.addEventListener('resize', measure);
  reducedMotion.addEventListener('change', () => setOpen(Boolean(target), true));
  return { setOpen, sync: measure };
}
