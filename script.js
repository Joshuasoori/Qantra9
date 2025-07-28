// افکت چشمک‌زدن فقط روی کلاس flicker
setInterval(() => {
  const brightness = Math.random() * 0.4 + 0.8;
  document.querySelectorAll('.flicker').forEach(el => {
    el.style.filter = brightness(${brightness});
  });
}, 3000);
