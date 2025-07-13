const frames = ['|', '\\', '/'];
let index = 0;

setInterval(() => {
  document.title = frames[index];
  index = (index + 1) % frames.length;
}, 250);
