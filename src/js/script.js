let img;
let img2;
let img3;

let switcher;
let switcher2;
let switcher3

let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;

let imagesFaces = [];

function preload() {

  let images = 86;

  for (let i = 1; i < images; i++) {
    path = '/assets/faces/' + str(i) + '.png' // create a path to the image
    loaded_image = loadImage(path)     // load the image from the path
    imagesFaces.push(loaded_image)             // add the loaded path to ims
  }

  // imagesFaces = [
  //   // loadImage('/assets/01.png'),
  //   // loadImage('/assets/02.png'),
  //   // loadImage('/assets/03.png'),
  // ]
  // imagesFaces[0] = loadImage('/assets/01.png');
  // imagesFaces[1] = loadImage('/assets/01.png');
  // imagesFaces[2] = loadImage('/assets/01.png');


  // img = loadImage('/assets/01.png');
  // img2 = loadImage('/assets/01.png');
  // img3 = loadImage('/assets/01.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');
  imageMode(CENTER);
  // image(img, windowWidth/2, windowHeight/2);

  currentImage1 = imagesFaces[currentIndex1];

  img = currentImage1.get(0, 0, currentImage1.width, currentImage1.height / 3);
  image(img, windowWidth / 2, ((windowHeight/2)-img.height+60), img.width/1.25, img.height/1.25);

  currentImage2 = imagesFaces[currentIndex2];

  img2 = currentImage2.get(0, currentImage2.height/3, currentImage2.width, currentImage2.height / 3);
  image(img2, windowWidth / 2, windowHeight/2, img2.width/1.25, img2.height/1.25);

  currentImage3 = imagesFaces[currentIndex3];

  img3 = currentImage3.get(0, currentImage3.height/1.5, currentImage3.width, currentImage3.height);
  image(img3, windowWidth / 2, ((windowHeight/2)+(windowHeight/2)+87), img3.width/1.25, img3.height/1.25);


  // switcher = select('#advance1');
  // switcher2 = select('#advance2');
  // switcher3 = select('#advance3');

  switcher = select('#advance1');
  switcher2 = select('#advance2');
  switcher3 = select('#advance3');

   //activate button when mouse pressed on the button
   switcher.mousePressed(forwardImg);
   switcher2.mousePressed(forwardImg2);
   switcher3.mousePressed(forwardImg3);

   switcher4 = select('#backward1');
   switcher5 = select('#backward2');
   switcher6 = select('#backward3');
 
    //activate button when mouse pressed on the button
    switcher4.mousePressed(backwardImg);
    switcher5.mousePressed(backwardImg2);
    switcher6.mousePressed(backwardImg3);


  } 
    


function draw(){

}

function forwardImg(){
  fill('black');
  rectMode(CENTER);
  rect(windowWidth/2, 50+(img.height/1.25/2), img.width, img.height/1.25);
  currentIndex1 = (currentIndex1 + 1) % imagesFaces.length;
  currentImage1 = imagesFaces[currentIndex1];
  img = currentImage1.get(0, 0, currentImage1.width, currentImage1.height / 3);
  image(img, windowWidth / 2, ((windowHeight/2)-img.height+60), img.width/1.25, img.height/1.25);
  console.log('change');
}
function forwardImg2(){
  fill('black');
  rectMode(CENTER);

  rect(windowWidth/2, windowHeight/2, img.width, img.height/1.25);
  currentIndex2 = (currentIndex2 + 1) % imagesFaces.length;
  currentImage2 = imagesFaces[currentIndex2];
  img2 = currentImage2.get(0, currentImage2.height/3, currentImage2.width, currentImage2.height / 3);
  image(img2, windowWidth / 2, windowHeight/2, img2.width/1.25, img2.height/1.25);
  console.log('change');
}
function forwardImg3(){
  fill('black');
  rectMode(CENTER);

  rect(windowWidth/2, 202+(2*(img2.height/1.25)), img.width, img.height/1.25);
  currentIndex3 = (currentIndex3 + 1) % imagesFaces.length;
  currentImage3 = imagesFaces[currentIndex3];
  img3 = currentImage3.get(0, currentImage3.height/1.5, currentImage3.width, currentImage3.height);
  image(img3, windowWidth / 2, ((windowHeight/2)+(windowHeight/2)+87), img3.width/1.25, img3.height/1.25);
  console.log('change');
}
function backwardImg(){
  fill('black');
  rectMode(CENTER);
  rect(windowWidth/2, 50+(img.height/1.25/2), img.width, img.height/1.25);
  currentIndex1 = (currentIndex1 - 1 + imagesFaces.length) % imagesFaces.length;
  currentImage1 = imagesFaces[currentIndex1];
  img = currentImage1.get(0, 0, currentImage1.width, currentImage1.height / 3);
  image(img, windowWidth / 2, ((windowHeight/2)-img.height+60), img.width/1.25, img.height/1.25);
  console.log('change');
}
function backwardImg2(){
  fill('black');
  rectMode(CENTER);

  rect(windowWidth/2, windowHeight/2, img.width, img.height/1.25);
  currentIndex2 = (currentIndex2 - 1 + imagesFaces.length) % imagesFaces.length;
  currentImage2 = imagesFaces[currentIndex2];
  img2 = currentImage2.get(0, currentImage2.height/3, currentImage2.width, currentImage2.height / 3);
  image(img2, windowWidth / 2, windowHeight/2, img2.width/1.25, img2.height/1.25);
  console.log('change');
}
function backwardImg3(){
  fill('black');
  rectMode(CENTER);

  rect(windowWidth/2, 202+(2*(img2.height/1.25)), img.width, img.height/1.25);
  currentIndex3 = (currentIndex3 - 1 + imagesFaces.length) % imagesFaces.length; 
  currentImage3 = imagesFaces[currentIndex3];
  img3 = currentImage3.get(0, currentImage3.height/1.5, currentImage3.width, currentImage3.height);
  image(img3, windowWidth / 2, ((windowHeight/2)+(windowHeight/2)+87), img3.width/1.25, img3.height/1.25);
  console.log('change');
}


console.log("red")