const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


//left eye
var leftx=913;
var lefty=444;

//right eye
var rightx= 1043;
var righty=456;

var mouse = {
	x: undefined,
	y: undefined
}

function Eyes(x, y){
	this.x = x;
	this.y = y;

	this.draw = function(){

		c.beginPath();
		c.arc(this.x, this.y, 25, 0, Math.PI*2, false);
		c.fillStyle = 'black';
		c.fill();

		c.beginPath();
		c.arc(this.x, this.y, 20, 0, Math.PI*2, false);
		c.fillStyle = '#87cefa';
		c.fill();

		c.beginPath();
		c.arc(this.x, this.y, 12, 0, Math.PI*2, false);
		c.fillStyle = 'black';
		c.fill();

	}

	this.update=function(){

		
		if(mouse.x<this.x && this.x-x>-13)
			this.x--;

		else if(mouse.x>this.x && this.x-x<13)
			this.x++;

		if(mouse.y<this.y && this.y-y>-13)
			this.y--;

		else if(mouse.y>this.y && this.y-y<13)
			this.y++;

		this.draw();
	}
}


leftEye = new Eyes(leftx, lefty);
rightEye = new Eyes(rightx, righty);


window.addEventListener("mousemove",function(event){
	mouse.x = event.x;
	mouse.y = event.y;
	console.log(mouse.x, mouse.y);
})

window.addEventListener('resize',function(event){
	canvas.width=window.innerWidth();
	canvas.height=window.innerHeight();
})


function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);
	leftEye.update();
	rightEye.update();
}

animate();