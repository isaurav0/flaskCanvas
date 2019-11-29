//getting started with canvas 
var canvas = document.getElementById('something');
var c = canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


//circle as object
function Circle(x, y, radius, dx, dy, strokeStyle)
{
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.dx = dx;
	this.dy = dy;
	this.strokeStyle=strokeStyle

	this.draw = function(){
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
		c.strokeStyle = this.strokeStyle
		c.stroke();
		
	}

	this.update = function(){
		//checking of boundaries
		if(this.x+this.radius>innerWidth || this.x-radius<0 )
			this.dx=-this.dx;
		else if( this.y+this.radius>innerHeight || this.y-this.radius<0)
			this.dy=-this.dy;

		this.x+=this.dx;
		this.y+=this.dy;
		this.draw();
	}

	
}


circles = [];
strokeStyle = ['red', 'blue', 'green', 'yellow', 'orange', 'gray', 'purple', 'pink', 'violet', 'magneta','tan']
number=50

for(var i=0;i<number;i++)
{
	var x = Math.random()*(window.innerWidth-50);
	var y = Math.random()*(window.innerHeight-50);
	var radius = Math.random()*50;
	var dx = Math.random()*8;
	var dy = Math.random()*8;
	circles.push(new Circle(x, y, radius, dx, dy, strokeStyle[Math.floor(Math.random()*strokeStyle.length)]));
}


function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);
	for( var i = 0; i < number; i++)
		circles[i].update();
	console.log("Animating");
}
animate();



