/*
@title: ""
@description: 
@date_and_time: //2008 :
@weather: 
@place: Japan -> Tokyo -> MyApartment -> theKitchen
@mood: 2 (1 minimum to 5 maximum)
@comments: 
*/

sinusoide[] q;

void setup() {
  size(1920, 1200);
  //size(700, 300);
  
  background(0);
  noStroke();
  smooth();

  frameRate(30);
  
  q = new sinusoide[100];
  
  for (int i = 1; i < 100; i++) {
    fill(255, random(100));
    q[i] = new sinusoide(int(random(-50, 50))); 
  }
  
  for (int i = 1; i < 100; i++) {
    fill(255, random(100));
    q[i] = new sinusoide(int(random(-21, 21))); 
  }
  
}

void draw() {
  
  for (int i = 1; i < 100; i++) {
    q[i].update();  
  }
  
  save("img"+nCurvas+".png");
  
}


class sinusoide {
  int posicion = 0;
  float x = 0;
  float angle = 0;
  float y = 0;
  int rotacion;

  sinusoide(int posicion) {
    this.posicion = posicion;
    this.rotacion = 1;
  }

  void update() {
    x = x + 1;
    y = height/2 - this.posicion - posicion * sin(angle);
    
    stroke(abs(posicion * 10), 1);
    
    ellipse(x, y, random(1, 10), random(1, 10));
    
    angle += 0.001 * posicion;
  }

}
