var sq;
var feed = [];
var numNut = prompt("How many nuts do you want to feed the squirrel?");
if(amount < 0) {
    var amount = prompt("Please enter a positive number of nuts.")
}
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
    var count = 0;
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;
    
        this.getDistance = function (other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    };
        
    this.eat = function() {
    for(var i = feed.length - 1; i >= 0 ; i--) {
        var nut = feed[i];
        var d = this.getDistance(nut);
        var r1 = nut.nutSize / 2;
        var r2 = diameter / 2;
        if(r1 + r2 > d) {
            feed.splice(i, 1);
            feed.push(new Nut(random(width), random(height)));
            count += 10;
        }
    }
}
        
        
    
    this.display = function() {
        x = mouseX;
        y = mouseY;
        // CLINTS ANIMAL

        noStroke();
        fill('brown');
        ellipse(x, y, 200 + count, 200 + count);

        noStroke();
        fill('brown');
        triangle(x-50, y-70, x-40, y-130, x+20, y-80);

        noStroke();
        fill('brown');
        triangle(x+20, y-90, x+40, y-130, x+60, y-80);

        fill('#FFFFFF');
        ellipse(x-38, y-26, 64+count, 64+count);

        fill('#FFFFFF');
        ellipse(x+40, y-26, 64+count, 64+count);

        fill('#EE3E36');
        ellipse(x+40, y-26, 40+count, 40+count/2);

        fill('#EE3E36');
        ellipse(x-38, y-26, 40+count*1.25, 40+count);

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