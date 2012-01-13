Forma [] q1;

void setup() {
  //size(1920, 1200);
  size(700, 300);
  
  background(0);
  
  smooth();
  
  q1 = new Forma[100];
  
  for (int m = 1; m < 100; m++) {
    q1[m] = new Forma(m);
    q1[m].update();
  }
  
}

void draw() {
  
  //background(0);
  
  for (int m = 1; m < 100; m++) {
    q1[m].update();
  }
  
  save("img.png");
}

class Forma {
  int n;
  
  float angle = 0.0;
  float offset = height/2;
  int borde = width/5;
  int altura = 1;
  
  Forma(int m) {
    n = m;
    
    noStroke();
    fill(n * 30);
    
  }
    
  void update() {
    for (int x = 0; x <= width; x += 1) {
      float y = offset + altura*sin(angle);
      ellipse(x, y, borde/n, borde/n);   
      
      if (x % 2 == 0) {
        borde -= 1;
      }
  
      angle += PI/(10*n);
      
      if (altura < height) {
        altura++;
      }
    }
      
  }
  
}
