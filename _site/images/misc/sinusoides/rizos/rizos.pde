float angle = 0.0;
float offset = height/2;
int repetitions = 0;
int translationx = 100;

void setup() {
  //size(900, 300);
  
  size(1920, 1200);
  //size(700, 300);
  
  
  background(0);
  smooth();
  color(255);
  noStroke();
  
  frameRate(1);
}

//rect(width/2, height/2, 30, 30);

void draw() {
  if (repetitions == 0) {
    for (int i = 1; i < 10; i++) {
      pushMatrix();
      translate(-50, height/2);
      scale(1);
      translate(translationx*i, 0);
      qqq(i);
      popMatrix();
    }
    repetitions++;
  }
  
  save("img3.png");
  stop();
}

void qqq(int altura) {
  pushMatrix();

  for (int i = 0; i <= 19; i++) {
    for (int x = 0; x <= width; x += 1) {
      float y = altura*sin(angle);
      fill(255, 255-x*2);
      ellipse(x, y, 2, 2);

      angle += PI/(10);
    }

    rotate(PI/10);
  }
  popMatrix();
}
