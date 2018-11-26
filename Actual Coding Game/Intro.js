// part 1
// imagine you have the power of god in a programming world
// you create a variable (think container) out of thin air

var intropage
var button2X
var button2Y
var buttonClick
var buttonHoverOver
var buttonNothing

function preload()
{
	// part 2
	// now that you have created a variable it is time to put some 
	// data into the variable, the code below does that

	intropage = loadImage('https://dkoffical.github.io/Coding-Game/Actual%20Coding%20Game/images/codingcanvas.png');

}

function setup()
{
	createCanvas(800,600);

	button2X = 1;
	button2Y = 1;
}

function draw()
{
	background(125,125,125)


	// part 3
	// show the contents of the variable on the canvas
	// image(imageVariable,x,y,length,height)

	





	// the code below shows you how you can
	// use images to represent buttons

	if (mouseX > button2X && mouseX < button2X + 200 && mouseY > button2Y && mouseY < button2Y+50)
	{
		image(buttonHoverOver,button2X,button2Y);
		image(intropage,0,0,800,600);
		if (mouseIsPressed)
		{
			image(buttonClick,button2X,button2Y);
			image(imgCatInMug,10,150,1060/3,702/3);
		}
	}
	else
	{
		image(buttonNothing,button2X,button2Y);
		image(intropage,0,0,800,600);
	}


}