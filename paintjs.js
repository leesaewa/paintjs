const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE; //캔버스의 넓이, 높이를 정해줘야함 (pixel modifier)
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR
ctx.lineWitdh = 2.5; //선 굵기

//ctx.fillRect(50, 20, 100, 49); //x, y, 가로, 세로

let painting = false;
let filling = false;


function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX; //마우스 위치값
    const y = event.offsetY; //마우스 위치값

    if(!painting) {
        ctx.beginPath(); //점의 시작점
        ctx.moveTo(x, y); //점의 시작점
    } else {
        ctx.lineTo(x, y); //직선으로 선을 만듦.
        ctx.stroke();
    }
    
}




function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick() {
    if(filling === true) {
        filling = false;
        mode.innerText = "Fill"
    } else {
        filling = true;
        mode.innerText = "paint";
        
    }
}


function handleCanvasClick() {
   if(filling) {
       ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
   }
}


function handleCM(event) {
    event.preventDefault();
}


function handleSaveClick() {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "paingJS[EXPORT]";
    link.click();
}


if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting); //클릭할 때 발생하는 이벤트
    canvas.addEventListener("mouseup", stopPainting); //마우스 클릭이 해제됐을 때
    canvas.addEventListener("mouseleave", stopPainting); //마우스가 영역을 벗어났을 때
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}


Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));
//array.from 메소드는 object로부터 array를 만듦.

if(range) {
    range.addEventListener("input", handleRangeChange);
}

if(mode) {
    mode.addEventListener("click", handleModeClick);
}

if(saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}