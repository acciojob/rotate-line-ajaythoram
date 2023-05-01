//your JS code here. If required.
const line = document.querySelector('#line');

let angle = 0;
setInterval(() => {
  angle += 1;
  line.style.transform = `rotate(${angle}deg)`;
}, 10);

