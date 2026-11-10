document.querySelector('.heart').addEventListener('click', e => {
  const r = e.target.getBoundingClientRect();
  const count = 8 + Math.floor(Math.random() * 6);
  for (let i = 0; i < count; i++) {
    const h = document.createElement('span');
    h.className = 'burst';
    h.textContent = '\u2665';
    h.style.left = r.left + r.width / 2 + 'px';
    h.style.top = r.top + r.height / 2 + 'px';
    const angle = Math.random() * Math.PI * 2;
    const dist = 80 + Math.random() * 120;
    h.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
    h.style.setProperty('--dy', Math.sin(angle) * dist - 60 + 'px');
    h.style.setProperty('--rot', (Math.random() - 0.5) * 360 + 'deg');
    document.body.appendChild(h);
    h.addEventListener('animationend', () => h.remove());
  }
});
