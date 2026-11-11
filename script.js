document.querySelector('.heart').addEventListener('click', e => {
  const r = e.target.getBoundingClientRect();
  const count = 3 + Math.floor(Math.random() * 3);
  for (let i = 0; i < count; i++) {
    const h = document.createElement('span');
    h.className = 'burst';
    h.textContent = '\u2665';
    h.style.left = r.left + r.width / 2 + (Math.random() - 0.5) * 20 + 'px';
    h.style.top = r.top + 'px';
    h.style.setProperty('--dx', (Math.random() - 0.5) * 60 + 'px');
    h.style.setProperty('--dy', -(120 + Math.random() * 100) + 'px');
    h.style.animationDelay = i * 120 + 'ms';
    document.body.appendChild(h);
    h.addEventListener('animationend', () => h.remove());
  }
});
