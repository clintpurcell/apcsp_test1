var sq;
var feed = [];
var numNut = 12;

var a = [1,2,3]

function setup() {
    createCanvas(740, 480);
    sq = new Squirrel();
    
    //create nuts
    for(var i = 0; i < numNut; i++) {
        feed.push(new Nut(random(width), random(height)));
    }
}


function draw() {
    background(0,255,0);
    sq.display();
    
    //show deez nuts
    for(var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
}

function mousePressed() {
    sq.eat();
}

function Nut(x, y) {
    // keyword this
    // makes variables public on the object
    
    // public instance variables
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.nutSize = 50;
    
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.nutSize, this.nutSize);
    
    }
}

function Squirrel() {
    
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;
    
        this.getDistance = function(other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    };
        
    this.eat = function() {
    for(var i = 0; i < feed.length ; i++) {
        var nut = feed[i];
        var d = this.getDistance(Nut);
        var r1 = nut.nutSize / 2;
        var r2 = diameter / 2;
        if(r1 + r2 > d) {
            feed.splice(i, 1);
        }
    }
}
        
        
    
    this.display = function() {
        var x = mouseX;
        var y = mouseY;

        // CLINTS ANIMAL

        noStroke();
        fill('brown');
        ellipse(x, y, 200, 200);

        noStroke();
        fill('brown');
        triangle(x-50, y-70, x-40, y-130, x+20, y-80);

        noStroke();
        fill('brown');
        triangle(x+20, y-90, x+40, y-130, x+60, y-80);

        fill('#FFFFFF');
        ellipse(x-38, y-26, 64, 64);

        fill('#FFFFFF');
        ellipse(x+40, y-26, 64, 64);

        fill('#EE3E36');
        ellipse(x+40, y-26, 40, 40);

        fill('#EE3E36');
        ellipse(x-38, y-26, 40, 40);

        fill('#000000');
        ellipse(x, y+20, 40, 40);

        noStroke();
        fill('#FFFFFF');
        triangle(x-70, y+70, x+20, y+80, x, y+100);

        noStroke();
        fill('#000000');
        triangle(x-50, y+80, x+10, y+80, x, y+95);
    }
}