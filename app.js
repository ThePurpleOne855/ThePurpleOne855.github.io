const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionButton = document.querySelector('#motion-toggle');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const projects = [...document.querySelectorAll('.project')];
const filterStatus = document.querySelector('#filter-status');

function applyFilter(value) {
  const filter = filterButtons.some(button => button.dataset.filter === value) ? value : 'all';
  let count = 0;
  projects.forEach(project => {
    const visible = filter === 'all' || project.dataset.category.split(' ').includes(filter);
    project.hidden = !visible;
    if (visible) count++;
  });
  filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
  filterStatus.textContent = `${count} ${count === 1 ? 'project' : 'projects'}`;
}

document.querySelector('#work-toolbar').hidden = false;
applyFilter(new URL(location.href).searchParams.get('focus'));
filterButtons.forEach(button => button.addEventListener('click', () => {
  const url = new URL(location.href);
  if (button.dataset.filter === 'all') url.searchParams.delete('focus');
  else url.searchParams.set('focus', button.dataset.filter);
  history.pushState(null, '', url);
  applyFilter(button.dataset.filter);
}));
window.addEventListener('popstate', () => applyFilter(new URL(location.href).searchParams.get('focus')));

function setMotion(paused) {
  document.body.classList.toggle('motion-paused', paused);
  motionButton.setAttribute('aria-pressed', String(paused));
  motionButton.textContent = paused ? 'Resume motion' : 'Pause motion';
}
motionButton.hidden = motionPreference.matches;
setMotion(motionPreference.matches);
motionButton.addEventListener('click', () => setMotion(!document.body.classList.contains('motion-paused')));
motionPreference.addEventListener('change', event => {
  motionButton.hidden = event.matches;
  setMotion(event.matches);
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (!motionPreference.matches && !document.body.classList.contains('motion-paused')) {
        entry.target.classList.add('is-entering');
        entry.target.addEventListener('animationend', () => entry.target.classList.remove('is-entering'), {once:true});
      }
      observer.unobserve(entry.target);
    });
  }, {threshold:0.12});
  document.querySelectorAll('.section-heading h2,.section-heading>p,.project-copy,.project-visual,.job-company,.job-detail,.about-intro>h2,.about-intro>div,.education-entry,.skills,.contact-top').forEach(element => observer.observe(element));
}

const copyButton = document.querySelector('#copy-email');
const copyStatus = document.querySelector('#copy-status');
if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    copyButton.disabled = true;
    try {
      await navigator.clipboard.writeText('jasas1357@gmail.com');
      copyStatus.textContent = 'Email copied. Ready when you are.';
    } catch {
      copyStatus.textContent = 'Copy wasn’t available. Select jasas1357@gmail.com above, or use the email link.';
    } finally {
      copyButton.disabled = false;
    }
  });
}
document.querySelector('#year').textContent = new Date().getFullYear();
