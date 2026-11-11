const form = document.getElementById('contact');
form?.addEventListener('submit', async e => {
  e.preventDefault();
  const status = form.querySelector('.form-status');
  const btn = form.querySelector('button');
  btn.disabled = true;
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) throw new Error();
    form.innerHTML = '<p class="form-status">Thanks! Your message is on its way. &hearts;</p>';
  } catch {
    status.textContent = 'Something went wrong. Try again or email me directly!';
    btn.disabled = false;
  }
});

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
