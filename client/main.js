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
    this.strokeStyle = "rgb(0, 0, 0)";

    this.arc(x, y, 3, 0, 360);
}

var drawpadPoints = [];

drawpad.addEventListener("mousemove", function(e){
    if(clicked) {
        drawpadPoints.push({x: e.clientX, y: e.clientY});
        drawpadCTX.sharpiePoint(e.clientX, e.clientY);
        console.log("drawing")
    }
});

drawpadCTX.sharpiePoint(20, 20);

drawpadCTX.fillStyle = "rgb(0, 0, 0)";
//drawpadCTX.arc(x, y, 3, 0, 360);
drawpadCTX.fillRect(10, 10, 30, 30);
