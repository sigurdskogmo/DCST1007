
class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = "rgb(" + Math.floor(Math.random() * 256) + ", " + 
            Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    }

    move() {
        this.x += Math.floor(Math.random() * 10 - 5);
        this.y += Math.floor(Math.random() * 10 - 5);
    }

    keepWithin() {
        if ((this.x < 0 || this.x > canvas.width) || (this.y < 0 || this.y > canvas.height)){
            this.x = Math.floor((Math.random() * canvas.width) + 1);
            this.y = Math.floor((Math.random() * canvas.height) + 1);
        }
    }

    show(shape) {
        if (shape == false) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.strokeStyle = "white";
            ctx.stroke();
        } else {
            ctx.fillRect(25, 25, 100, 100);
            ctx.clearRect(45, 45, 60, 60);
            ctx.strokeRect(50, 50, 50, 50);
        }
        
        
    }
    contains(mousex, mousey) {
        let a = mousex - this.x;
        let b = mousey - this.y;
        let d = Math.sqrt(a ** 2 + b ** 2);

        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }
}

var isRect = false;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", mouseClick, false);
document.addEventListener("keydown", switchShape);

function switchShape(event) {
    if (event.code == 'Space') {
        isRect = !isRect;
    }
}

let bubbles = [];
for (let i = 0; i < 10; i++){
    let x = Math.floor((Math.random() * canvas.width) + 1);
    let y = Math.floor((Math.random() * canvas.height) + 1);
    let r = Math.floor(Math.random() * 40 + 10);
    bubbles[i] = new Bubble(x, y, r);
}

setInterval(() => {
    let x = Math.floor((Math.random() * canvas.width) + 1);
    let y = Math.floor((Math.random() * canvas.height) + 1);
    let r = Math.floor(Math.random() * 40 + 10);
    let bubble = new Bubble(x, y, r);
    bubbles.push(bubble);
}, 1000)

setInterval(drawCircle, 100);

function drawCircle() {
    reset();
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].keepWithin();
        bubbles[i].show(false);
    }
}

function reset() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0,  canvas.width, canvas.height);
}

function mouseClick(event){
    let choseBubble = false;

    for (let i = 0; i < bubbles.length; i++) {
        if(bubbles[i].contains(event.x, event.y)) {
            bubbles.splice(i, 1);
            choseBubble = true;
        }
    }

    if (choseBubble == false) {
        let r = Math.floor(Math.random() * 40 + 10);
        let b = new Bubble(event.x, event.y, r);
        bubbles.push(b);
    }
}
