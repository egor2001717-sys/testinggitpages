const canvas2 = document.getElementById("canvas2");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ctx2 = canvas2.getContext("2d");
ctx.fillStyle = "blue";
ctx2.fillStyle = "green";
ctx.fillRect(100, 100, 200, 200);
ctx2.fillRect(10, 100, 200, 20);