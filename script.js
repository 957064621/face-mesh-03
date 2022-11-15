  
let img1;//胡子
let img2;//帽子
let img3;//面部
let img4;//衣服

let img5;//果子左
let img6;//果子右
let img7;//字
let img6width = 700;


  function setup(){

    createCanvas(800, 600);
    img1 = loadImage('assert/胡子.png');//帽子
    img2 = loadImage('assert/左红脸蛋.png');//胡子
    img3 = loadImage('assert/右红脸蛋.png');//
    img4 = loadImage('assert/花瓶.png');

    img5 = loadImage('assert/左边耳朵.png');//
    img6 = loadImage('assert/右边耳朵.png');//
     img7 = loadImage('assert/字.png');//

    colorMode(HSB);

    stroke(255);
    strokeWeight(3);
  }

  function draw(){
    imageMode(CENTER);
    clear();
    if(detections != undefined){
      console.log(detections);
      if(detections.multiFaceLandmarks != undefined && detections.multiFaceLandmarks.length >= 1){
   hong1();
   hong2();
       funnyyanjing2();
        funnyhuzi();
        guozi1();
        guozi2();
        zi();
      }
    }
  }

  function drawFaceMesh(){
    stroke(255);
    strokeWeight(3);
    noFill();
    beginShape(POINTS);  



    for(let j=0; j<detections.multiFaceLandmarks[0].length; j++){
      let x = detections.multiFaceLandmarks[0][j].x * width;
      let y = detections.multiFaceLandmarks[0][j].y * height;

 

      vertex(x, y);
    }

    endShape();
  }

  function funnyhuzi(){
    let noseX = detections.multiFaceLandmarks[0][11].x * width;
    let noseY = detections.multiFaceLandmarks[0][11].y * height;
    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img1, noseX, noseY,880,880);//胡子
  }

  function funnymaozi(){
    let maoziX = detections.multiFaceLandmarks[0][9].x * width;
    let maoziY = detections.multiFaceLandmarks[0][9].y * height;
    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img2, maoziX, maoziY+60,600,600);//帽子
  }




  function funnyyanjing2(){
  
    image(img4, 400,320 ,800,600);//衣服
  }

    function guozi1(){
    let yanjing2X = detections.multiFaceLandmarks[0][63].x * width;
    let yanjing2Y = detections.multiFaceLandmarks[0][63].y * height;
    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img5, yanjing2X+70, yanjing2Y+150,700,500);//果子1
  }

    function guozi2(){
    let yanjing2X = detections.multiFaceLandmarks[0][298].x * width;
    let yanjing2Y = detections.multiFaceLandmarks[0][298].y * height;
    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);

    image(img6, yanjing2X-70, yanjing2Y+150,img6width,500);//果子2
  }

  function hong1(){
    let yanjing2X = detections.multiFaceLandmarks[0][213].x * width;
    let yanjing2Y = detections.multiFaceLandmarks[0][213].y * height;
    image(img2, yanjing2X+70, yanjing2Y,700,500);//果子1
  }

    function hong2(){
    let yanjing2X = detections.multiFaceLandmarks[0][433].x * width;
    let yanjing2Y = detections.multiFaceLandmarks[0][433].y * height;
    image(img3, yanjing2X-55, yanjing2Y,img6width,500);//果子2
  }

    function zi(){
   // console.log(img6width);
    if (img6width >600) {
       image(img7, 100,280,130,500);//果子2
    }
   
  }



