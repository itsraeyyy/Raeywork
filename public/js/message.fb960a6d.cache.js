/** Temporarily send the hero action to the contact section. */
export function setupMessage() {
  const anchor = document.querySelector('.portrait-atmosphere');
  if (!anchor) return;
  const trigger = document.createElement('a');
  trigger.className = 'message-trigger';
  trigger.href = '#contact';
  trigger.textContent = 'Send message ↗';
  trigger.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const contact = document.querySelector('#contact');
    if (!contact) return;
    event.preventDefault();
    if (location.hash !== '#contact' && /^https?:$/.test(location.protocol)) history.pushState(null, '', '#contact');
    document.dispatchEvent(new CustomEvent('portfolio:prepare-navigation', { detail: { target: contact } }));
    requestAnimationFrame(() => {
      contact.setAttribute('tabindex', '-1');
      contact.focus({ preventScroll: true });
      contact.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    });
  });
  anchor.append(trigger);
  document.querySelector('.contact-link')?.remove();
}

/** Retained for later polish; the current page does not initialize the composer. */
export function setupMessageComposer({ email, message = {} }) {
  const anchor = document.querySelector('.portrait-atmosphere');
  if (!anchor) return;
  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'message-trigger';
  trigger.textContent = 'Send message ↗';
  trigger.setAttribute('aria-haspopup', 'dialog');
  anchor.append(trigger);

  const dialog = document.createElement('dialog');
  dialog.id = 'note-dialog';
  dialog.className = 'note-dialog';
  dialog.setAttribute('aria-labelledby', 'note-title');
  dialog.innerHTML = `
    <form class="note-form">
      <header class="note-header"><h2 id="note-title">A note for Raey</h2><button type="button" class="note-close" aria-label="Close message">×</button></header>
      <div class="note-fields">
        <label for="note-name">From</label><input id="note-name" name="name" autocomplete="name" placeholder="Your name" required maxlength="100">
        <label for="note-email">Your email</label><input id="note-email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required maxlength="254">
        <label for="note-subject">Subject</label><input id="note-subject" name="subject" placeholder="What’s on your mind?" required maxlength="160">
      </div>
      <label class="sr-only" for="note-body">Your message</label>
      <textarea id="note-body" name="body" placeholder="Write your note here…" required maxlength="5000"></textarea>
      <div class="note-actions"><p class="note-help"></p><button class="note-send" type="submit"></button></div>
      <p class="note-status" role="status"></p>
      <a class="note-email"></a>
    </form>`;
  document.body.append(dialog);
  const form = dialog.querySelector('form');
  const send = dialog.querySelector('.note-send');
  const status = dialog.querySelector('.note-status');
  const mode = message.mode || 'preview';
  const help = dialog.querySelector('.note-help');
  send.textContent = mode === 'mailto' ? 'Continue in email ↗' : mode === 'endpoint' ? 'Send message ↗' : 'Preview message ↗';
  help.textContent = mode === 'preview' ? 'Local preview · messages are not sent yet.' : mode === 'mailto' ? 'Your email app opens with the note ready to send.' : 'A little note, straight to my inbox.';
  const emailLink = dialog.querySelector('.note-email');
  emailLink.href = `mailto:${email}`;
  emailLink.textContent = email;

  let previousOverflow;
  let opener = trigger;
  function openMessage(event) {
    opener = event.currentTarget;
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    dialog.querySelector('#note-name').focus({ preventScroll: true });
  }
  trigger.setAttribute('aria-controls', dialog.id);
  trigger.addEventListener('click', openMessage);
  document.querySelector('.contact-link')?.remove(); // One message entry point in the hero.
  dialog.querySelector('.note-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow || '';
    opener.focus({ preventScroll: true });
  });
  form.addEventListener('input', () => { status.textContent = ''; });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
    if (mode === 'preview') {
      status.textContent = 'Your note is ready. This local preview hasn’t sent it; email delivery will be connected later.';
      return;
    }
    if (mode === 'mailto') {
      const body = `From: ${data.name} <${data.email}>\n\n${data.body}`;
      location.href = `mailto:${email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
      status.textContent = 'Continue in your email app to send the note.';
      return;
    }
    // Configure a same-origin endpoint later. Never put provider API keys here.
    if (!message.endpoint?.startsWith('/') || message.endpoint.startsWith('//')) {
      status.textContent = 'Sending is not connected yet. Please use the email link below.';
      return;
    }
    send.disabled = true;
    status.textContent = 'Sending…';
    try {
      const response = await fetch(message.endpoint, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data), signal: AbortSignal.timeout(15000) });
      if (!response.ok) throw new Error('Could not send');
      status.textContent = 'Message sent. Thank you for the note!';
      form.reset();
    } catch {
      status.textContent = 'Your note couldn’t be sent. Your draft is still here—try again or use the email link below.';
    } finally { send.disabled = false; }
  });
}
