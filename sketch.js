let rec;
let recs = [];
let n =100;

function setup() {
  createCanvas(400, 400); 
  
  for(let i=0; i<n; i++){
    let r = new Walker();
    recs.push(r);
  }
}


function draw() {
  background(220, 5);
  
  for(let r of recs){
    r.update()
    r.display()
  }
}



class Walker {
  constructor() {
  	this.x = random(1, 15);
  	this.y = random(1, 15);
  	this.w = width/2
  }
  
  update() {
  	this.x = this.x + random(-5, 5);
  	this.y = this.y + random(-5, 5);
  }
  
  display() {
    let c = color(random(0,255));
    fill(c)
    noStroke()
	quad(this.x, this.y, this.w,this.x,this.x,this.w,this.y);
  }
}