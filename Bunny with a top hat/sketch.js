/*
Created by David Weed for the Battlerite Phantomime Challenge
1/25/2018
*/

var bunny;
var hat;
var carrot;

Items = [];


function preload()
{
	bunny  = loadImage('assets/bunny.png');
	hat    = loadImage('assets/tophat.png');
	carrot = loadImage('assets/carrot.png');
}


function setup()
{
	createCanvas(windowWidth, windowHeight);
	Items.push(new Item(bunny, width/2-150, height/2 -200, 300, 400, false));
	Items.push(new Item(hat, 50, 100, 420, 300, true));
	Items.push(new Item(carrot, 50, 500, 400, 200, true));
}


function mouseClicked()
{
	console.log(mouseX, mouseY);
}


function mouseDragged()
{
	for (var i = 0; i < Items.length; i++)
	{
		if (Items[i].containsMouse() && Items[i].clickable)
		{
			Items[i].x += mouseX - pmouseX;
			Items[i].y += mouseY - pmouseY;
		}
	}
}


function draw()
{
  	background('purple');
	fill('lightblue');
	ellipse(width/2, height/2, 600, 600);

	textSize(32);
	text('By: David Weed', width-250, height-25);

  	for (var i = 0; i < Items.length; i++)
	{
  		Items[i].display();
  	}
}


function Item(Image, x, y, w, h, clickable)
{
	this.x = x;
	this.y = y;
	this.h = h;
	this.w = w;

	this.image = Image;
	this.clickable = clickable;

	this.display = function()
	{
		image(this.image, this.x, this.y, this.w, this.h);
	};

	this.containsMouse = function()
	{
		return (mouseX > this.x && mouseX < this.x + this.w
					&& mouseY > this.y && mouseY < this.y + this.h);
	};
}
