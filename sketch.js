let modules = [];

function setup() {
  createCanvas(400, 400);
  background(0);
  
  textStyle(BOLD);
  textSize(200);
  textAlign(CENTER, CENTER);
  fill(255);
  text("버블", width/2, height/2+20);
  
  let gap = 6;
  
  for(let y=0; y<height; y+=gap){
    for(let x=0; x<width; x+=gap){
      let c = get(x, y)
      let b = brightness(c); // 0 ~ 100
      
      if(b == 100){
        modules.push( new Module( new p5.Vector(x, y) ) );
      }
      
    }
  }
}
  
function draw(){
  background(240);
  for(let i=0; i<modules.length; i+=1){
    modules[i].update();
    modules[i].display();
  }
}