var sq;

function setup() {
    createCanvas(740, 480);
    sq = new Squirrel();
}

function draw() {
    background(0,255,0);
    sq.display();
}

function Squirrel() {
    
    
    this.display = function() {
        var x = mouseX;
        var y = mouseY;
    

        noStroke();
        fill('#52C5DC');
        ellipse(x, y, 200, 200);


        fill('#EFB8D2');
        ellipse(x, y+30, 64, 64);


        fill('#FFFFFF');
        ellipse(x+42, y-26, 64, 64);


        fill('#7FC35E');
        ellipse(x+42, y-26, 40, 40);


        fill('#FFFFFF');
        ellipse(x-42, y-26, 64, 64);


        fill('#7FC35E');
        ellipse(x-42, y-26, 40, 40);


        fill('#52C5DC');
        push();
        translate(x-100, y-80);
        rotate(Math.PI/4);
        ellipse(0, 0, 52, 92);
        pop();


        fill('#52C5DC');
        push();
        translate(x+100, y-80);
        rotate(-Math.PI/4);
        ellipse(0, 0, 52, 92);
        pop();


        fill('#EE3E36');
        arc(x-20, y+80, 40, 70, 0, PI+QUARTER_PI, CHORD);

        // CLINTS ANIMAL

        noStroke();
        fill('brown');
        ellipse(x+380, y, 200, 200);

        noStroke();
        fill('brown');
        triangle(x+330, y-70, x+340, y-130, x+400, y-80);

        noStroke();
        fill('brown');
        triangle(x+400, y-90, x+420, y-130, x+440, y-80);

        fill('#FFFFFF');
        ellipse(x+342, y-26, 64, 64);

        fill('#FFFFFF');
        ellipse(x+ 420, y-26, 64, 64);

        fill('#EE3E36');
        ellipse(x+420, y-26, 40, 40);

        fill('#EE3E36');
        ellipse(x+342, y-26, 40, 40);

        fill('#000000');
        ellipse(x+381, y+20, 40, 40);

        noStroke();
        fill('#FFFFFF');
        triangle(x+310, y+70, x+400, y+80, x+380, y+100);

        noStroke();
        fill('#000000');
        triangle(x+330, y+80, x+390, y+80, x+380, y+95);
    }
}