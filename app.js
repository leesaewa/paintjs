const canvas = document.querySelector("canvas");

//context = 붓, 브러쉬
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// 사람 그리기

ctx.fillRect(210, 200 - 30, 15, 100);
ctx.fillRect(350, 200 - 30, 15, 100);
ctx.fillRect(260, 200 - 30, 60, 200);

// circle = x, y, radius,startAngle, endAngle
ctx.arc(290, 100, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath(); //이 다음의 도형부터 색상을 적용할 것임.
ctx.fillStyle = "white";
ctx.arc(270, 90, 8, Math.PI, 2 * Math.PI);
ctx.arc(310, 90, 8, Math.PI, 2 * Math.PI);
ctx.fill();
