var capture;
var precision;
var width ;
var heigth ;
var circlesRadius ;
var circlesDiff ;


function setup() {
  //scale(0.5);

  circlesRadius = 10;
  width = 640;
  heigth = 360;
  frameRate(10);
  createCanvas(width,heigth);
capture = createCapture(VIDEO);
//capture.hide();
capture.size(width, heigth);
precision = 1;

}

function draw() {
  background(255);
    for (var x=0; x<width;x=x+2*circlesRadius){
        for (var y=0; y<heigth;y=y+2*circlesRadius){
          let r=0;
          let g=0;
          let b=0;
          let a=0;
          for (var x1=x; x1<2*circlesRadius+x;x1=x1+1){
              for (var y1=y; y1<2*circlesRadius+y;y1=y1+1){
                var c =capture.get(x1,y1);
                r = r+ c[0];
                g = g+ c[1];
                b = b+ c[2];

            }
          }
          r =  r/(4*circlesRadius*circlesRadius);
          g = g/(4*circlesRadius*circlesRadius);
          b = b/(4*circlesRadius*circlesRadius);
          //let c = capture.get(x,y);
          //stroke(255)
          noStroke()
          var c = getPaletColor(color(r,g,b))
          fill(c);

          ellipse((x+circlesRadius),(y+circlesRadius),circlesRadius*2,circlesRadius*2)
          //rect((x+circlesRadius),(y+circlesRadius),circlesRadius*2,circlesRadius*2,50,0,20,0)
         //rect((x),(y),circlesRadius*2,circlesRadius*2)
      }
    }
  //  updatePixels();

}
function getPaletColor(c){
return c;
  var colors = [
    color('#eb6841'),
    color('#eb6841'),
    color('#cc2a36'),
    color('#4f372d'),
    color('#00a0b0'),
    color('#343d46'),
    color(0),
    // color('#96ceb4'),
    // //color('#ffeead '),
    // color('#ff6f69'),
    // color('#ffcc5c '),
    // color('#88d8b0'),
    // color('#88d8b0'),
    // color('#36454f'),
    //
    //
    //
    // color('#4b3832'),
    // color('#854442'),
    // color('#fff4e6'),
    // color('#3c2f2f'),
    // color('#be9b7b'),



    // color('#008744' ),
    // color('#0057e7'),
    // color('#d62d20'),
    // color( '#ffa700'),
    // //color('#ffffff')
  ];
  var colorIndex =0;
  for (var i =0;i<colors.length;i++)
  {
    if (colorDistance(colors[colorIndex],colors[i])>=colorDistance(c,colors[i]))
    {
      colorIndex=i;
    }
  }

  return colors[colorIndex];

}
function colorDistance(a,b){
  return sq(red(a)+red(b))+sq(green(a)+green(b))+sq(blue(a)+blue(b))+sq(alpha(a)+alpha(b));
}
function mouseClicked()
{

}
function mouseWheel(event)
{

}

function doubleClicked()
{

}

function mousePressed() {

}
