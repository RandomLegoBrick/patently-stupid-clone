//const socket = io();

var bdy = window.document.querySelector("body");

var clicked = false;
bdy.addEventListener("mousedown", function() {//Mouse reading
	clicked = true;
});
bdy.addEventListener("mouseup", function() {
	clicked = false;
});

var drawpad = document.getElementById("drawpad");
var drawpadCTX = drawpad.getContext("2d");
drawpadCTX.sharpiePoint = function(x, y){
    this.fillStyle = "rgb(0, 0, 0)";

    this.beginPath();
    this.arc(x, y, 3, 0, 360);
    //this.endPath();
    this.fill();
}

var drawpadPoints = [];

drawpad.addEventListener("mousemove", function(e){
    if(clicked) {
        drawpadPoints.push({x: e.clientX, y: e.clientY});
        console.log("drawing")

        drawpadCTX.strokeStyle = "rgb(0, 0, 0)"
        drawpadCTX.beginPath();
        drawpadCTX.moveTo(drawpadPoints.x, drawpadPoints.y);
        drawpadCTX.lineTo(drawpadPoints[drawpadPoints.length-2].x, drawpadPoints[drawpadPoints.length-2].y);
        drawpadCTX.lineWidth = 3;
        drawpadCTX.stroke();
    }
});

drawpadCTX.sharpiePoint(20, 20);

