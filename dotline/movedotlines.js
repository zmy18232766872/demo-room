let Dots = function () {
  // 画布
  this.canvas;
  this.ctx;

  // 画点
  this.x;
  this.y;
  this.r;

  // 移动
  // 随机确定点的移动速度与方向 速度值在 [-2, 2) 之间 提高数值可加快速度 
  //（Math.random() 随机返回[0,1)的数）
  this.sx = Math.random() * 4 - 2;
  this.sy = Math.random() * 4 - 2;
};

Dots.prototype = {
  // 初始化点的方法
  init: function (canvas, x,y) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    // 随机生成 <4 的半径值
    this.r = Math.random() * 4;

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.fillStyle = "rgba(0,0,0,.6)";
    this.ctx.fill();
    this.ctx.closePath();
  },

  // 更新点位置
  update: function () {
    this.x = this.x + this.sx;
    this.y = this.y + this.sy;

    // 点超出canvas范围时另其"重生"
    if (this.x < 0 || this.x > this.canvas.width) {
      this.init(this.canvas);
    }
    if (this.y < 0 || this.y > this.canvas.height) {
      this.init(this.canvas);
    }

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.fillStyle = "rgba(0,0,0,.6)";
    this.ctx.fill();
    this.ctx.closePath();
  }
};

  let dotsArr = [],
      dotsNum = 100,
      dotsDistance = 120, // 点之间产生连线的最大距离

      canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d');

  // 生成点
  for (let i = 0; i < dotsNum; i ++) {
    let dot = new Dots();
    dotsArr.push(dot);
    dot.init(canvas);
  }

  // 鼠标事件
  // document.addEventListener('click', createDot);
  // function createDot(e) {
  //   let tx = e.pageX,
  //       ty = e.pageY;
  //   if ((tx > 0 && tx < canvas.width) && (ty > 0 && ty < canvas.height)) {
  //     for (let i = 0; i < 2; i ++) {
  //       let dot = new Dots();
  //       dotsArr.push(dot);
  //       dotsNum += 1;
  //       dot.init(canvas, tx, ty);
  //     }
  //   }
  // };

  // 动画与连线
  let requestAnimFrame = requestAnimationFrame || webkitRequestAnimationFrame || oRequestAnimationFrame || msRequestAnimationFrame;
  requestAnimFrame(animateUpdate); // 兼容不同浏览器的requestAnimationFrame

  function animateUpdate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空canvas中原有的内容

    for (let i = 0; i < dotsNum; i ++) {
      dotsArr[i].update();
    }

    // 绘制连线
    for (let i = 0; i < dotsNum; i ++) {
      for (let j = i + 1; j < dotsNum; j ++) {
        let tx = dotsArr[i].x - dotsArr[j].x,
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
    // 继续渲染
    requestAnimFrame(animateUpdate);
  }
