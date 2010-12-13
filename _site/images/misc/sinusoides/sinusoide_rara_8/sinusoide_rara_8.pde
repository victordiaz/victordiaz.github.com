import processing.pdf.*;

import processing.opengl.*;

/*
@title: ""
 @description: 
 @date_and_time:  / /2009 :
 @weather: 
 @place: Spain -> Granada -> Home Sweet Home -> Despacho
 @mood: 3 (1 minimum to 5 maximum)
 @comments: 
 */



PFont qqq = createFont("Arial", 50);

color from = color(random(255), random(255), random(255));
color to = color(random(255), random(255), random(255));


plotSin q;


void setup() {

  //size(1440, 900);

  size(700, 500, OPENGL);

  background(255);

  frameRate(25);

  //smooth();


  q = new plotSin(30, random(1, 20), -0.1, 5);

}

void draw() {
  background(255);

  pushMatrix();
  translate(0, height * 1 / 4);
  new plotSin(30, random(1, 20), -0.1 ,2);
  popMatrix();


  pushMatrix();
  translate(0, height * 2 / 4);
  new plotSin(70, random(1, 20), -0.07, 3);
  popMatrix();


  pushMatrix();
  translate(0, height * 3 / 4);
  
  new plotSin(30, random(1, 20), -0.1, 5);
  
  //q.update();
  //q.move();
  popMatrix();




  //  textFont(qqq, 50);

  //  fill(0);
  //  text("Im not an artist", 10, 50);
  //  fill(255);
  //  text("Im not an artist", 12, 52);
  //  text("Im not an engineer", 10, 100);
  //  text("Im Victor Manuel Diaz Barrales", 10, 150);
  //

}


class plotSin {
  float amplitude; 
  float frequency; 
  float incremento; 
  int spacing;
  float a;
  int q;
  float inc;
  int sentido = 1;


  plotSin(float amplitude, float frequency, float incremento, int spacing) {
    this.a = random(10);
    this.q = width / 4;
    this.inc =  frequency/q;

    this.amplitude = amplitude;
    this.frequency = frequency;
    this.incremento = incremento;
    this.spacing = spacing;


    noFill();

    for(int i = -10; i < q * 4 + 170; i = i + 1) {
      //line(i, 50, i, 50+sin(a)*40.0);

      if(i % 1 == 0)  amplitude += incremento;
      if(i % 1 == 0) inc += 0.00001;


      //line(i, 0, i, amplitude * sin(a ));

      //colorMode(RGB);
      //fill(lerpColor(from, to, norm(i, 0, q * 4)));

      stroke(0, 10);
      //line(0, amplitude * sin(a ), width, amplitude * sin(a ));



      if (i % spacing == 0) fill(255);
      else fill(0);

      noStroke();
      ellipse(i, amplitude * sin(a ), amplitude, amplitude);


      textFont(qqq, amplitude * sin(a ));
      fill(0);
      if(i % 12 == 0) {
        pushMatrix();

        translate(i, amplitude * sin(a ));
        rotate(map(sin(a ), -1, 1, -1, 1));

        //fill(255);
        //text("q", 0, 0);

        popMatrix();
      }


      if (i == 0 || i == q * 4 - 1) { 
        //curveVertex(i, amplitude + amplitude * sin(a ));
      }  

      //curveVertex(i, amplitude + amplitude * sin(a ));



      a = a + inc;
    }


    //save("img###.png");



    //noLoop();

  }


  void update() {
    //if(i % 1 == 0)  
    amplitude += sentido * incremento;

    if (frameCount % 10 == 0) sentido = sentido * (-1);  


    //println(sentido);


  }

  void move() {
    for(int i = -10; i < q * 4 + 170; i = i + 1) {
      //line(i, 50, i, 50+sin(a)*40.0);


      //line(i, 0, i, amplitude * sin(a ));

      //colorMode(RGB);
      //fill(lerpColor(from, to, norm(i, 0, q * 4)));

      stroke(0, 10);
      //line(0, amplitude * sin(a ), width, amplitude * sin(a ));



      if (i % spacing == 0) fill(255);
      else fill(0);

      noStroke();
      ellipse(i, amplitude * sin(a ), amplitude, amplitude);


      textFont(qqq, amplitude * sin(a ));
      fill(0);
      if(i % 12 == 0) {
        pushMatrix();

        translate(i, amplitude * sin(a ));
        rotate(map(sin(a ), -1, 1, -1, 1));

        //fill(255);
        //text("q", 0, 0);

        popMatrix();
      }


      if (i == 0 || i == q * 4 - 1) { 
        //curveVertex(i, amplitude + amplitude * sin(a ));
      }  

      //curveVertex(i, amplitude + amplitude * sin(a ));



      a = a + inc;
    }

  }  


}




