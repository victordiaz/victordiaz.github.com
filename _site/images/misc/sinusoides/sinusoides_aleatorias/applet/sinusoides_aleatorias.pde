/*
@title: ""
@description: 
@date_and_time: //2008 :
@weather: 
@place: Japan -> Tokyo -> MyApartment -> theKitchen
@mood: 2 (1 minimum to 5 maximum)
@comments: 
*/

sinusoide q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17;

void setup() {
  size(500, 500);
  background(0);
  noStroke();
  smooth();

  frameRate(30);
  
  q1 = new sinusoide(int(random(-20, 20)));
  q2 = new sinusoide(int(random(-20, 20)));
  q3 = new sinusoide(int(random(-20, 20)));
  q4 = new sinusoide(int(random(-20, 20)));
  q5 = new sinusoide(int(random(-20, 20)));
  q6 = new sinusoide(int(random(-20, 20)));
  q7 = new sinusoide(int(random(-20, 20)));
  q8 = new sinusoide(int(random(-20, 20)));
  q9 = new sinusoide(int(random(-20, 20)));
  q10 = new sinusoide(int(random(-20, 20)));
  q11 = new sinusoide(int(random(-20, 20)));
  q12 = new sinusoide(int(random(-20, 20)));
  q13 = new sinusoide(int(random(-20, 20)));
  q14 = new sinusoide(int(random(-20, 20)));
  q15 = new sinusoide(int(random(-20, 20)));
  q16 = new sinusoide(int(random(-20, 20)));
  q17 = new sinusoide(int(random(-20, 20)));
}

void draw() {
  q1.update();
  q2.update();
  q3.update();
  q4.update();
  q5.update();
  q6.update();
  q7.update();
  q8.update();
  q9.update();
  q10.update();
  q11.update();
  q12.update();
  q13.update();
  q14.update();
  q15.update();
  q16.update();
  q17.update();
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
    x = x + 0.1;
    y = height/2 - this.posicion - posicion * sin(angle);
    
    stroke(abs(posicion * 10));
    ellipse(x, y, 1, 1);
    
    angle = rotacion * angle + PI/(1000 + posicion);
  }

}
