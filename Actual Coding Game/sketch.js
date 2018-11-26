/*
  canvasID - 0 - addition
  canvasID - 1 - subtraction
  canvasID - 2 - multiplication
  canvasID - 3 - division
*/

var canvasID;

function preload()
{

	preloadIntro();
	preloadInstruction();
	preloadChooseAvatar();
	preloadMainMenu();
	preloadLevel1();
	preloadLevel1Score();
	preloadLevel2();
	preloadLevel2Score();
	preloadLevel3();
	preloadLevel3Score();
	preloadLevel4();
	preloadLevel4Score();
	preloadEndPage()

}

function setup()
{
	createCanvas(800,600);

	setupIntro();
	setupInstruction();
	setupChooseAvatar();
	setupMainMenu();
	setupLevel1();
	setupLevel1Score();
	setupLevel2();
	setupLevel2Score();
	setupLevel3();
	setupLevel3Score();
	setupLevel4();
	setupLevel4Score();
	setupEndPage()

	canvasID = 0;
}

function draw()
{
	textSize(32);

	background(125,125,125)

	drawIntro();

}

function mouseReleased()
{
	if (canvasID == -1)
	{
		canvasID = 1;
	}
	if (canvasID == -2)
	{
		canvasID = 2;
	}
	if (canvasID == -3)
	{
		canvasID = 3;
	}
	if (canvasID == -4)
	{
		canvasID = 4;
	}
}
