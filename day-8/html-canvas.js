const canvas = document.querySelector('#draw');

const ctx = document.getContext('2d'); // tell it we only want to do this in the 2d context.

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = 'false';
let lastX = 0;
let lastY = 0;

function draw(e) {
	console.log(e);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = true));
canvas.addEventListener('mousedown', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
