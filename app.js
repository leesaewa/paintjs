const canvas = document.querySelector("canvas");

//context = 붓, 브러쉬
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// 마우스 움직일 때마다 색이 변하는 선
const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
];

function onClick(event) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);
