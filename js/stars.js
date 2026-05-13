// Generates animated star field in .hero__stars
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.hero__stars');
  if (!container) return;

  const count = 120;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2 + 0.5;
    star.style.cssText = `
      width:  ${size}px;
      height: ${size}px;
      top:    ${Math.random() * 100}%;
      left:   ${Math.random() * 100}%;
      --op:   ${(Math.random() * 0.5 + 0.1).toFixed(2)};
      --dur:  ${(Math.random() * 4 + 2).toFixed(1)}s;
      animation-delay: ${(Math.random() * 5).toFixed(1)}s;
    `;
    container.appendChild(star);
  }
});
