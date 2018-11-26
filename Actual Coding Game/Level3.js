var bgm;

// declare sfx1 variable
var sfx1;

var buttonStart;

function preload()
{
	bgm = loadSound("https://dkoffical.github.io/p5jstutorial/p5js%20Tutorial%204.2/sounds/windows.mp3");

	// load sound file into variable sfx1
	sfx1 = loadSound("https://dkoffical.github.io/p5jstutorial/p5js%20Tutorial%204.2/sounds/thunder.mp3");

	buttonStart = loadImage("https://dkoffical.github.io/p5jstutorial/p5js%20Tutorial%204.2/images/button_press-for-sfx.png");

}

function setup()
{
	createCanvas(800,600);

	bgm.play();
}

function draw()
{
	textSize(12);

	background(125,125,125)

	text("Credit for Windows Remix Music from www.youtube.com",10,40);
	text("Credit for Thunder Sound Effect from www.youtube.com",10,80);


	image(buttonStart,200,100);

	// Check if we have clicked on the button
	if (mouseX > 200 && mouseX < 200 + 168 && mouseY > 100 && mouseY < 100 + 40 && mouseIsPressed)
	{
		// check that the sound effect is NOT (!) already playing; it is usually not desired to have the sound effect overlap
		if (!sfx1.isPlaying())
		{
			// play the sound effect
			sfx1.play();
		}
	}



}

