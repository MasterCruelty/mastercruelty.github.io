/* ════════════════════════════════════════════════
   MasterCruelty: render + tab logic
   ════════════════════════════════════════════════ */

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]));

/* Cards use a "stretched link": the title link covers the whole card,
   so other links inside it (e.g. co-authors) stay clickable on their own. */
const cardHead = (tag) => `
  <div class="card-head">
    <span class="card-tag">${esc(tag)}</span>
    <span class="card-ext" aria-hidden="true">↗</span>
  </div>
`;

const cardTitle = (item, rel = 'noopener') => `
  <h3><a class="card-link" href="${esc(item.href)}" target="_blank" rel="${esc(item.rel || rel)}">${esc(item.title)}</a></h3>
`;

const coauthorLine = (list = []) => list.length ? `
  <p class="card-coauthor">co-author:
    ${list.map((c) => `<a href="${esc(c.href)}" target="_blank" rel="noopener">${esc(c.name)}</a>`).join(', ')}
  </p>
` : '';

const projectCard = (p) => `
  <article class="card project-card">
    ${cardHead(p.tag)}
    ${cardTitle(p)}
    <p>${esc(p.desc)}</p>
    ${coauthorLine(p.coauthors)}
    <div class="card-tech">${p.tech.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
  </article>
`;

const linkCard = (extraClass) => (s) => `
  <article class="card ${extraClass} ${esc(s.brand || '')}">
    ${cardHead(s.tag)}
    ${cardTitle(s)}
    <p>${esc(s.desc)}</p>
    <span class="card-cta" aria-hidden="true">${esc(s.cta)}</span>
  </article>
`;

const pill = (s) => `<span class="pill">${esc(s)}</span>`;

const linkRow = (l) => `
  <a class="link-row" href="${esc(l.href)}" target="_blank" rel="noopener">
    <span class="link-key">${esc(l.key)}</span>
    <span class="link-val">${esc(l.val)}</span>
    <span class="link-arrow" aria-hidden="true">↗</span>
  </a>
`;

const stat = (s) => `
  <div class="stat">
    <div class="stat-num">${esc(s.num)}${s.plus ? '<span class="stat-plus">+</span>' : ''}</div>
    <div class="stat-label">${esc(s.label)}</div>
  </div>
`;

const fill = (id, html) => {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
};

fill('pills',      SITE.skills.map(pill).join(''));
fill('links',      SITE.links.map(linkRow).join(''));
fill('stats',      SITE.stats.map(stat).join(''));
fill('university', SITE.university.map(projectCard).join(''));
fill('personal',   SITE.personal.map(projectCard).join(''));
fill('games',      SITE.games.map(projectCard).join(''));
fill('socials',    SITE.socials.map(linkCard('social-card')).join(''));
fill('press',      SITE.press.map(linkCard('press-card')).join(''));

/* ── TABS ──────────────────────────────────────────
   The active tab lives in the URL hash (#projects), so tabs can be
   linked directly and the browser back button works. */
const tabs   = [...document.querySelectorAll('.tab-btn')];
const panels = document.querySelectorAll('.tab-panel');
const hero   = document.getElementById('hero');
const names  = tabs.map((b) => b.dataset.tab);

const show = (target) => {
  if (!names.includes(target)) target = 'home';

  tabs.forEach((b) => {
    const on = b.dataset.tab === target;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', on);
    b.tabIndex = on ? 0 : -1;
  });
  panels.forEach((p) => p.classList.toggle('active', p.id === 'tab-' + target));
  hero.classList.toggle('visible', target === 'home');
};

tabs.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    history.pushState(null, '', target === 'home' ? location.pathname : '#' + target);
    show(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  btn.addEventListener('keydown', (e) => {
    const i = tabs.indexOf(btn);
    const next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const dest = tabs[(next + tabs.length) % tabs.length];
    dest.click();
    dest.focus();
  });
});

window.addEventListener('popstate', () => show(location.hash.slice(1)));
show(location.hash.slice(1));

document.getElementById('year').textContent = new Date().getFullYear();
