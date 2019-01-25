canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(70, 80, 30, 0, Math.PI * 2, false);

// 实心圆 - 填充颜色,默认是黑色
ctx.fillStyle = 'red';
// 实心圆 - 画实心圆
ctx.fill();

// 空心圆 - 边框颜色,默认是黑色
ctx.strokeStyle = 'black';
// 空心圆 - 画空心圆
ctx.stroke();
ctx.closePath();

