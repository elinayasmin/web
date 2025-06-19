const toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.addEventListener('click', () => {
  toggleSwitch.classList.toggle('active');
  document.body.classList.toggle('dark');
});
document.addEventListener('mousemove', (e) => {
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);

  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
});
    window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelector('.background').style.transform = `translateY(${scrollY * 0.3}px)`;
  document.querySelector('.midground').style.transform = `translateY(${scrollY * 0.5}px)`;
});
