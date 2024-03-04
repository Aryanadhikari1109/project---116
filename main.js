noseX = 0;
noseY = 0;


function preload(){
    mustasche = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
   canvas = createCanvas(350,350);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(350, 350);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
    
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 40;
        noseY = results[0].pose.nose.y;


    }
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}


function draw(){
    image(video, 0, 0, 350, 350);
    image(mustasche, noseX, noseY, 80, 35);

}

function take_snapshot(){
    save('myFilteredImage.png');
}
