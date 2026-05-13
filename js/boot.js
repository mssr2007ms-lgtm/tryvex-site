// Boot sequence animation
document.addEventListener('DOMContentLoaded', () => {
  const lines = document.querySelectorAll('.hero__boot-line');
  const delays = [800, 1300, 1800, 2300];

  lines.forEach((line, i) => {
    setTimeout(() => {
      line.classList.add('visible');
      // Через 200мс после появления — ставим "done"
      setTimeout(() => line.classList.add('hero__boot-line--done'), 200);
    }, delays[i]);
  });

  // Генерируем горизонтальные grid-линии
  const grid = document.querySelector('.hero__grid');
  if (!grid) return;
  const rows = 12;
  const cols = 8;
  for (let i = 1; i < rows; i++) {
    const line = document.createElement('div');
    line.className = 'hero__grid-line';
    line.style.top = `${(i / rows) * 100}%`;
    line.style.opacity = i % 3 === 0 ? '0.8' : '0.4';
    grid.appendChild(line);
  }
  for (let i = 1; i < cols; i++) {
    const col = document.createElement('div');
    col.className = 'hero__grid-col';
    col.style.left = `${(i / cols) * 100}%`;
    grid.appendChild(col);
  }
});
