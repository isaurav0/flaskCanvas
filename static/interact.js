//canvas
var canvas = document.getElementById('something');
canvas.width= window.innerWidth;
canvas.height=window.innerHeight;

var c = canvas.getContext('2d');
var mouse = {
	x: undefined,
	y: undefined
}

window.addEventListener('mousemove',
	function(event){
		mouse.x = event.x;
		mouse.y = event.y;
		console.log(mouse)

})

window.addEventListener('resize', function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();

})

var colorArray = [
	"#F2B134",
	"#068587",
	"#4FB99F",
	"#ED553B"
];


function Circle(x, y, dx, dy, radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = colorArray[Math.floor(Math.random()*colorArray.length)];

	this.draw = function(){
		c.beginPath();
		c.arc(this.x, this.y, this.radius, Math.PI*2, false);
		c.fillStyle = this.color;
		c.fill();
	}

	this.update = function(){
		if(this.x+this.radius>innerWidth || this.x-this.radius<0)
			this.dx = -this.dx
		if(this.y+this.radius>innerHeight || this.y-this.radius<0)
			this.dy = -this.dy
		this.x+=this.dx
		this.y+=this.dy

		if(Math.abs(this.x-mouse.x)<90 && Math.abs(this.y-mouse.y)<90)
		{
			if(this.radius<40)
				this.radius+=1;
		}
		else if(this.radius>1)
			this.radius-=1;

		this.draw();
	}
}
//variables declaration
number=1000;
circles = [];

function init(){
	for(var i=0;i<number; i++)
	{
		radius=Math.random()*3+1;
		x = Math.random()*window.innerWidth;
		y = Math.random()*window.innerHeight;
		dx = Math.random()*8;
		dy = Math.random()*10;
		circles.push(new Circle(x, y, dx, dy, radius));

	}
}

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0 ,0 , innerWidth, innerHeight);
	for(i=0;i<number;i++)
		circles[i].update();
}

init();
animate();


//
