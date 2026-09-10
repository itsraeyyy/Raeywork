/** Accessible calendar using a local snapshot; no GitHub request from the visitor. */
export async function setupGitHub({ username, year }) {
  const section = document.createElement('section');
  section.id = 'github-activity';
  section.className = 'section github-section';
  section.setAttribute('aria-labelledby','github-title');
  section.innerHTML = `<div class="section-heading"><h2 id="github-title">Building, day by day.</h2><a class="section-aside github-profile">GitHub ↗</a></div><div class="github-content"><p class="github-summary">Loading GitHub activity…</p></div>`;
  document.querySelector('#work')?.after(section);
  const profile = section.querySelector('.github-profile');
  profile.href = `https://github.com/${encodeURIComponent(username)}`;
  profile.target = '_blank'; profile.rel = 'noreferrer';
  const content = section.querySelector('.github-content');
  try {
    const response = await fetch(new URL('./data/github.json',import.meta.url), { signal: AbortSignal.timeout(3000) });
    if (!response.ok) throw new Error('Unavailable');
    const data = await response.json();
    if (data.username !== username || data.year !== year || !Array.isArray(data.days) || !data.days.length) throw new Error('No calendar');
    content.innerHTML = `<div class="github-topline"><p class="github-summary"></p></div><div class="github-panel"><div class="github-scroll" role="region" aria-label="GitHub contribution calendar"><div class="github-calendar"><div class="github-weekdays" aria-hidden="true"><span>Mon</span><span>Wed</span><span>Fri</span></div><div class="github-chart"><div class="github-months" aria-hidden="true"></div><div class="github-grid" role="group" aria-label="Daily contributions. Use arrow keys to explore."></div></div></div></div><div class="github-bottom"><p class="github-detail" role="status"></p><div class="github-legend" aria-hidden="true">Less <i data-level="0"></i><i data-level="1"></i><i data-level="2"></i><i data-level="3"></i><i data-level="4"></i> More</div></div></div><p class="github-updated"></p>`;
    content.querySelector('.github-summary').textContent = `${data.total.toLocaleString()} contributions in ${data.year}`;
    const dateFormat = new Intl.DateTimeFormat('en',{month:'short',day:'numeric',year:'numeric',timeZone:'UTC'});
    content.querySelector('.github-updated').textContent = `Public profile activity · Updated ${dateFormat.format(new Date(data.fetchedAt))}`;
    const grid = content.querySelector('.github-grid');
    const months = content.querySelector('.github-months');
    const detail = content.querySelector('.github-detail');
    const hint = 'A little progress, one day at a time.';
    function render() {
      const days = data.days;
      const offset = new Date(days[0].date+'T00:00:00Z').getUTCDay();
      const weeks = Math.ceil((offset+days.length)/7);
      grid.replaceChildren(); months.replaceChildren();
      grid.style.setProperty('--weeks',weeks); months.style.setProperty('--weeks',weeks);
      detail.textContent = hint;
      let month = '';
      days.forEach((day,index) => {
        const date = new Date(day.date+'T00:00:00Z');
        const column = Math.floor((offset+index)/7)+1;
        const monthName = date.toLocaleDateString('en',{month:'short',timeZone:'UTC'});
        if (monthName !== month && (index===0 || days.length-index>14)) {
          const label = document.createElement('span'); label.textContent=monthName; label.style.gridColumn=String(column); months.append(label); month=monthName;
        }
        const cell = document.createElement('button');
        cell.type='button'; cell.className='github-day'; cell.dataset.level=day.level;
        cell.style.gridColumn=String(column); cell.style.gridRow=String(date.getUTCDay()+1);
        const text = `${day.count} ${day.count===1?'contribution':'contributions'} · ${dateFormat.format(date)}`;
        cell.setAttribute('aria-label',text); cell.title=text; cell.tabIndex=index===days.length-1?0:-1;
        const inspect = () => { detail.textContent=text; };
        cell.addEventListener('pointerenter',inspect); cell.addEventListener('focus',inspect);
        cell.addEventListener('click',inspect);
        cell.addEventListener('keydown',event => {
          const delta = {ArrowRight:7,ArrowLeft:-7,ArrowUp:-1,ArrowDown:1}[event.key];
          if (delta===undefined && !['Home','End'].includes(event.key)) return;
          event.preventDefault();
          const next = event.key==='Home'?0:event.key==='End'?days.length-1:Math.max(0,Math.min(days.length-1,index+delta));
          grid.querySelectorAll('button').forEach((button,i)=>button.tabIndex=i===next?0:-1);
          grid.children[next].focus();
        });
        grid.append(cell);
      });
    }
    render();
  } catch {
    content.querySelector('.github-summary').textContent = 'Activity is unavailable right now. You can still explore my work on GitHub.';
  }
}
