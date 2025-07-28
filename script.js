// Flickering stars effect
setInterval(() => {
  const brightness = Math.random() * 0.4 + 0.8;
  document.body.style.filter = `brightness(${brightness})`;
}, 3000);