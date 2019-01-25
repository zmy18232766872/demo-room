let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

for (let i = 0; i < 2; i++) {
  ctx.beginPath()
  // 设置原点位置为（100，100），半径为10
  ctx.arc(100 + i * 150, 100 + i * 250, 10, 0, Math.PI * 2, false)

  // 设置线的宽度，单位是像素
  ctx.lineWidth = 2
  ctx.stroke()

  // 实心圆 - 填充颜色,默认是黑色
  // 实心圆 - 画实心圆
  ctx.fill()
  ctx.closePath()
}


