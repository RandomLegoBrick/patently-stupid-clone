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
drawpadCTX.sharpie = function(x, y){
    this.fillStyle = "rgb(0, 0, 0)"
}


var drawpadPoints = [];

drawpad.addEventListener("mousemove", function(){
    if(clicked) {
        drawpadPoints.push({x: clientX, y: clientY});
    }
});

