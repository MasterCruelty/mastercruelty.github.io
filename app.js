/* ════════════════════════════════════════════════
   MasterCruelty — render + tab logic
   ════════════════════════════════════════════════ */

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]));

const projectCard = (p) => `
  <a class="card project-card" href="${esc(p.href)}" target="_blank" rel="noopener">
    <div class="card-head">
      <span class="card-tag">${esc(p.tag)}</span>
      <span class="card-ext">↗</span>
    </div>
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.desc)}</p>
    <div class="card-tech">${p.tech.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
  </a>
`;

const socialCard = (s) => `
  <a class="card social-card ${esc(s.brand)}" href="${esc(s.href)}" target="_blank" rel="${esc(s.rel || 'noopener')}">
    <div class="card-head">
      <span class="card-tag">${esc(s.tag)}</span>
      <span class="card-ext">↗</span>
    </div>
    <h3>${esc(s.title)}</h3>
    <p>${esc(s.desc)}</p>
    <span class="card-cta">${esc(s.cta)}</span>
  </a>
`;

const pressCard = (p) => `
  <a class="card press-card" href="${esc(p.href)}" target="_blank" rel="${esc(p.rel || 'noopener')}">
    <div class="card-head">
      <span class="card-tag">${esc(p.tag)}</span>
      <span class="card-ext">↗</span>
    </div>
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.desc)}</p>
    <span class="card-cta">${esc(p.cta)}</span>
  </a>
`;

const pill = (s) => `<span class="pill">${esc(s)}</span>`;

const linkRow = (l) => `
  <a class="link-row" href="${esc(l.href)}" target="_blank" rel="noopener">
    <span class="link-key">${esc(l.key)}</span>
    <span class="link-val">${esc(l.val)}</span>
    <span class="link-arrow">↗</span>
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
fill('socials',    SITE.socials.map(socialCard).join(''));
fill('press',      SITE.press.map(pressCard).join(''));

const tabs   = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');
const hero   = document.getElementById('hero');

tabs.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    tabs.forEach((b) => b.classList.toggle('active', b === btn));
    panels.forEach((p) => p.classList.toggle('active', p.id === 'tab-' + target));
    hero.classList.toggle('visible', target === 'home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
