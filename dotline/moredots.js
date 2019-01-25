let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let dotsNum = 100;
let x = 0;
let y = 0;
let r = 0;

//生成点
for (let i = 0; i < dotsNum; i ++) {
  x = Math.random() * canvas.width;
  y = Math.random() * canvas.height;
  r = Math.random() * 4; // 随机生成 <4 的半径值

  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = "rgba(0,0,0,.8)";
  ctx.fill();
  ctx.closePath();
}