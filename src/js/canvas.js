import a from "../img/a.jpg";

// var img = document.createElement('img');
// var canvas = document.getElementById('myCanvas');
// if (canvas.getContext){
//     var ctx = canvas.getContext('2d');
//     ctx.fillRect(25, 25, 100, 100); //绘制一个填充的矩形fillRect(x,y,width,height)
//     ctx.clearRect(45, 45, 60, 60);  // 清除指定矩形区域，让清除部分完全透明
//     ctx.strokeRect(50, 50, 50, 50); // 绘制一个矩形的边框ctx.beginPath();

//     ctx.beginPath(); // 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
//     ctx.moveTo(25, 175); //将笔触移动到指定的坐标x以及y上。
//     ctx.lineTo(75, 150); // lineTo(x,y) 绘制一条从当前位置到指定x以及y位置的直线。
//     ctx.lineTo(75, 200);
//     ctx.fillStyle = "rgb(200,0,0)";
//     ctx.fill(); // fill()通过填充路径的内容区域生成实心的图形。


// }

// img.src = a;
// canvas.append(img);


var sun = new Image();
var moon = new Image();
var earth = new Image();
function init(){
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('myCanvas1').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,500,500); // clear canvas

  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save();
  ctx.translate(250,250);

  // Earth
  var time = new Date();
  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
  ctx.translate(105,0);
  ctx.fillRect(0,-12,50,24); // Shadow
  ctx.drawImage(earth,-12,-12);

  // Moon
  ctx.save();
  ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
  ctx.translate(0,28.5);
  ctx.drawImage(moon,-3.5,-3.5);
  ctx.restore();

  ctx.restore();
  
  ctx.beginPath();
  ctx.arc(250,250,105,0,Math.PI*2,false); // Earth orbit
  ctx.stroke();
 
  ctx.drawImage(sun,0,0,500,500);

  window.requestAnimationFrame(draw);
}

init();


