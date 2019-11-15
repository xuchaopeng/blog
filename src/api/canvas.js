const config = {
  zindex: -1,
  alpha: 0.6,
  ribbon_width: 300
};

let canvas = {
  param: {
    w: 0,
    h: 0,
    rw: config.ribbon_width,
    r: 0,
    PI_2: Math.PI * 2,
    DP: 1,
    cos: Math.cos,
    random: Math.random,
    ctx: null,
    canvas: null
  },
  creatDom() {
    if (this.param.canvas) return;
    this.param.canvas = document.createElement("canvas");
    this.param.canvas.style.cssText =
      "position:fixed;top:0;left:0;z-index:" + config.zindex;
    document.getElementsByTagName("body")[0].appendChild(this.param.canvas);
  },
  creatCtx() {
    let param = this.param;
    param.canvas.width = param.w * param.DP; // 返回实际宽高
    param.canvas.height = param.h * param.DP;
    param.ctx = param.canvas.getContext("2d");
    param.ctx.scale(param.DP, param.DP); // 水平、竖直方向缩放
    param.ctx.globalAlpha = config.alpha; // 图形透明度
  },
  creatParam() {
    this.param.w = window.innerWidth;
    this.param.h = window.innerHeight;
    this.param.DP = window.devicePixelRatio || 1;
  },
  geneY(y) {
    let temp = y + (Math.random() * 2 - 1.1) * this.param.rw;
    return temp > this.param.h || temp < 0 ? this.geneY(y) : temp;
  },
  draw(start, end) {
    let param = this.param;
    param.ctx.beginPath(); // 创建一个新的路径
    param.ctx.moveTo(start.x, start.y); // path起点
    param.ctx.lineTo(end.x, end.y); // path终点
    let nextX = end.x + (Math.random() * 2 - 0.25) * param.rw,
      nextY = this.geneY(end.y);
    param.ctx.lineTo(nextX, nextY);
    param.ctx.closePath();

    param.r -= param.PI_2 / -50;
    // 随机生成并设置canvas路径16进制颜色
    param.ctx.fillStyle =
      "#" +
      (
        ((param.cos(param.r) * 127 + 128) << 16) |
        ((param.cos(param.r + param.PI_2 / 3) * 127 + 128) << 8) |
        (param.cos(param.r + (param.PI_2 / 3) * 2) * 127 + 128)
      ).toString(16);
    param.ctx.fill(); // 根据当前样式填充路径
    param.path[0] = param.path[1]; // 起点更新为当前终点
    param.path[1] = { x: nextX, y: nextY }; // 更新终点
  },
  initReact() {
    let param = this.param;
    let path = [
      { x: 0, y: param.h * 0.7 + param.rw },
      { x: 0, y: param.h * 0.7 - param.rw }
    ];
    this.param.path = path;
    param.ctx.clearRect(0, 0, param.w, param.h);
    while (path[1].x < param.w + param.rw) {
      this.draw(path[0], path[1]);
    }
  },
  init() {
    if (!canvas.param.canvas) {
      canvas.creatDom();
      canvas.creatParam();
      canvas.creatCtx();
    }
    canvas.initReact();
  }
};
canvas.init();
document.onclick = canvas.init;
document.ontouchstart = canvas.init;
