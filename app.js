const canvas = document.querySelector("canvas");

//context = 붓, 브러쉬
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

//사각형을 채움. x, y, width, height
// ctx.fillStyle = "red";
// ctx.fillRect(50, 50, 100, 200);
// fillRect, Rect는 지름길임. 지름길을 사용하고 싶지 않다면, moveTo, lineTo로 하나씩 그려나갈 수 있음.

// 집 그리기
ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.lineWidth = 2;
ctx.fillRect(300, 300, 50, 100);
ctx.fillRect(200, 200, 200, 20);
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();
