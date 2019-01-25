var Dots = function () {
  // 画布相关
  this.canvas;
  this.ctx;

  // 画点相关，x,y为横纵坐标，r为原点半径
  this.x;
  this.y;
  this.r;
};

Dots.prototype = {
  // 初始化点的方法
  init: function (canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.r = Math.random() * 4; // 随机生成 <4 的半径值

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.closePath();
  }
};


  let dotsArr = [],
      dotsNum = 100,
      dotsDistance = 150,

      bg = document.getElementById('bg'),
      canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d');

  for (var i = 0; i < dotsNum; i++) {
    let dot = new Dots();
    dotsArr.push(dot);
    dot.init(canvas);
  }
  
  // 绘制连线
  for (var i = 0; i < dotsNum; i ++) {
    for (var j = i + 1; j < dotsNum; j ++) {
      var tx = dotsArr[i].x - dotsArr[j].x,
          ty = dotsArr[i].y - dotsArr[j].y,
          // 三角形斜边长
          s = Math.sqrt(Math.pow(tx, 2) + Math.pow(ty, 2));

      if (s < dotsDistance) {
        ctx.beginPath();
        ctx.moveTo(dotsArr[i].x, dotsArr[i].y);
        ctx.lineTo(dotsArr[j].x, dotsArr[j].y);
        ctx.strokeStyle = 'rgba(0,0,0,'+(dotsDistance-s)/dotsDistance+')';

        ctx.strokeWidth = 1;
        ctx.stroke();
        ctx.closePath();
      }
    }
  }


