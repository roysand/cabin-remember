function isSummer() {
  const season = new URLSearchParams(location.search).get('season');
  if (season === 'winter') return false;
  if (season === 'summer') return true;
  const now = new Date();
  const m = now.getMonth() + 1; // 1–12
  const d = now.getDate();
  if (m >= 6 && m <= 9) return true;    // June–September
  if (m === 5) return true;             // All of May
  if (m === 10 && d <= 15) return true; // Oct 1–15
  return false;
}

if (isSummer()) {
  document.body.classList.add('summer');
  document.querySelector('.cabin-art').textContent = '⛰️';
  document.querySelector('.subtitle').innerHTML = 'Sjekk av punktene før du reiser — takk for besøket! ☀️';
  document.querySelector('.divider').textContent = '🌿 🌿 🌿 🌿 🌿';
  document.querySelectorAll('.winter-only').forEach(el => { el.hidden = true; });
} else {
  document.querySelectorAll('.summer-only').forEach(el => { el.hidden = true; });
}

function visibleItems() {
  return [...document.querySelectorAll('.checklist li')].filter(li => !li.closest('[hidden]'));
}

const TOTAL = visibleItems().length;
const modal = document.getElementById('done-modal');

document.getElementById('modal-close').addEventListener('click', () => {
  modal.classList.remove('show');
});
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.remove('show');
});

document.querySelectorAll('.checklist li').forEach(li => {
  li.addEventListener('click', function () {
    this.classList.toggle('done');
    updateProgress();
  });
});

updateProgress();

function updateProgress() {
  const all  = visibleItems();
  const done = all.filter(li => li.classList.contains('done')).length;
  const pct  = TOTAL ? Math.round((done / TOTAL) * 100) : 0;
  document.getElementById('bar').style.width   = pct + '%';
  document.getElementById('count').textContent = done + ' av ' + TOTAL + ' gjort';
  if (done === TOTAL) modal.classList.add('show');
}
