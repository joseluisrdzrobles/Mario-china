function preload() {
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);
	
	video = createCapture(VIDEO);
	video.parent('game_console');
	video.size(400, 255)

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

	world_start.setVolume(0.2)

}

function modelLoaded() {
	console.log('Model Loaded!');
	video.loop()
  }

  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
  }
   
function draw() {
	game();

	translate(width,0);
	scale(-1, 1);
}







