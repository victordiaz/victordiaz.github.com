import processing.core.*; import java.applet.*; import java.awt.*; import java.awt.image.*; import java.awt.event.*; import java.io.*; import java.net.*; import java.text.*; import java.util.*; import java.util.zip.*; import javax.sound.midi.*; import javax.sound.midi.spi.*; import javax.sound.sampled.*; import javax.sound.sampled.spi.*; import java.util.regex.*; import javax.xml.parsers.*; import javax.xml.transform.*; import javax.xml.transform.dom.*; import javax.xml.transform.sax.*; import javax.xml.transform.stream.*; import org.xml.sax.*; import org.xml.sax.ext.*; import org.xml.sax.helpers.*; public class sinusoides_aleatorias extends PApplet {/*
@title: ""
@description: 
@date_and_time: //2008 :
@weather: 
@place: Japan -> Tokyo -> MyApartment -> theKitchen
@mood: 2 (1 minimum to 5 maximum)
@comments: 
*/

sinusoide q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17;

public void setup() {
  size(500, 500);
  background(0);
  noStroke();
  smooth();

  frameRate(30);
  
  q1 = new sinusoide(PApplet.parseInt(random(-20, 20)));
  q2 = new sinusoide(PApplet.parseInt(random(-20, 20)));
  q3 = new sinusoide(PApplet.parseInt(random(-20, 20)));
  q4 = new sinusoide(PApplet.parseInt(random(-20, 20)));
  q5 = new sinusoide(PApplet.parseInt(random(-20, 20)));
  q6 = new sinusoide(PApplet.parseInt(random(-20, 20)));
  q7 = new sinusoide(PApplet.parseInt(random(-20, 20)));
  q8 = new sinusoide(PApplet.parseInt(random(-20, 20)));
  q9 = new sinusoide(PApplet.parseInt(random(-20, 20)));
  q10 = new sinusoide(PApplet.parseInt(random(-20, 20)));
  q11 = new sinusoide(PApplet.parseInt(random(-20, 20)));
  q12 = new sinusoide(PApplet.parseInt(random(-20, 20)));
  q13 = new sinusoide(PApplet.parseInt(random(-20, 20)));
  q14 = new sinusoide(PApplet.parseInt(random(-20, 20)));
  q15 = new sinusoide(PApplet.parseInt(random(-20, 20)));
  q16 = new sinusoide(PApplet.parseInt(random(-20, 20)));
  q17 = new sinusoide(PApplet.parseInt(random(-20, 20)));
}

public void draw() {
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

  public void update() {
    x = x + 0.1f;
    y = height/2 - this.posicion - posicion * sin(angle);
    
    stroke(abs(posicion * 10));
    ellipse(x, y, 1, 1);
    
    angle = rotacion * angle + PI/(1000 + posicion);
  }

}

  static public void main(String args[]) {     PApplet.main(new String[] { "sinusoides_aleatorias" });  }}