


/*
    Going to take clock image canvas element in the constructor.
    With this it will draw the current time onto the clock image canvas.
    I must say the the purpose of the clock is to act like a timer for the UI.
    to handle all the various x positions a digit can take on the clock, we will pass an this.#offsetperameter.
        This allows us to just create the method once, and space them out latter using the offset
    Will also contain the date as text, and will add it to the clock canvas as well. 
*/

class ClockTime {

    #context = null;
    #offset;
    #dateObj;
    constructor(contextObj){
        this.#context = contextObj;
        this.#dateObj = new Date();
        this.#offset= 0;

        // initialize the context style
        this.#context.fillStyle = "red";
        this.#context.strokeStyle = "red";
        this.#context.lineWidth = "3";
        this.#context.font = "20pt sans-serif";

        this.#drawDivider();
        this.#writeCurrentDate();
    }
    
    // draws the number 1 on the canvas
    #draw1(){
        // top half
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 350, 140);
        this.#context.lineTo(this.#offset+ 330, 180);
        this.#context.lineTo(this.#offset+ 330, 260);
        this.#context.lineTo(this.#offset+ 350, 300);    
        this.#context.closePath();
        this.#context.stroke();

        // bottom half
        this.#context.beginPath()
        this.#context.moveTo(this.#offset+ 330, 280);
        this.#context.lineTo(this.#offset+ 345, 320);
        this.#context.lineTo(this.#offset+ 345, 380);
        this.#context.lineTo(this.#offset+ 330, 400);
        this.#context.closePath();
        this.#context.stroke();
    }

    #draw2(){
        // top part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 330, 160);
        this.#context.lineTo(this.#offset+ 350, 140);
        this.#context.lineTo(this.#offset+ 410, 140);
        this.#context.lineTo(this.#offset+ 410, 250);
        this.#context.lineTo(this.#offset+ 380, 250);
        this.#context.lineTo(this.#offset+ 370, 230);
        this.#context.lineTo(this.#offset+ 370, 160);
        this.#context.closePath();
        this.#context.stroke();

        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 360, 230);
        this.#context.lineTo(this.#offset+ 330, 230);
        this.#context.lineTo(this.#offset+ 330, 300);
        this.#context.lineTo(this.#offset+ 350, 320);
        this.#context.lineTo(this.#offset+ 390, 320);
        this.#context.lineTo(this.#offset+ 410, 300);
        this.#context.lineTo(this.#offset+ 360, 270);
        this.#context.closePath();
        this.#context.stroke();
    }

    #draw3(){
        // top part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 330, 160);
        this.#context.lineTo(this.#offset+ 350, 140);
        this.#context.lineTo(this.#offset+ 410, 140);
        this.#context.lineTo(this.#offset+ 410, 160);
        this.#context.closePath();
        this.#context.stroke();

        // middle part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 330, 260);
        this.#context.lineTo(this.#offset+ 350, 240);
        this.#context.lineTo(this.#offset+ 410, 240);
        this.#context.lineTo(this.#offset+ 410, 260);
        this.#context.closePath();
        this.#context.stroke();


        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 330, 390);
        this.#context.lineTo(this.#offset+ 350, 370);
        this.#context.lineTo(this.#offset+ 410, 370);
        this.#context.lineTo(this.#offset+ 410, 390);
        this.#context.closePath();
        this.#context.stroke();
        // bar part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 420, 140);
        this.#context.lineTo(this.#offset+ 450, 140);
        this.#context.lineTo(this.#offset+ 450, 390);
        this.#context.lineTo(this.#offset+ 420, 390);
        this.#context.closePath();
        this.#context.stroke();
    }

    #draw4(){
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 325, 140);
        this.#context.lineTo(this.#offset+ 325, 250);
        this.#context.lineTo(this.#offset+ 345, 235);
        this.#context.lineTo(this.#offset+ 345, 140);
        this.#context.closePath();
        this.#context.stroke();

        // middle part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 330, 260);
        this.#context.lineTo(this.#offset+ 350, 240);
        this.#context.lineTo(this.#offset+ 410, 240);
        this.#context.lineTo(this.#offset+ 410, 260);
        this.#context.closePath();
        this.#context.stroke();

        // bar part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 420, 140);
        this.#context.lineTo(this.#offset+ 450, 140);
        this.#context.lineTo(this.#offset+ 450, 390);
        this.#context.lineTo(this.#offset+ 420, 390);
        this.#context.closePath();
        this.#context.stroke();

    }

    #draw5(){

        // top part    
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 355, 140);
        this.#context.lineTo(this.#offset+ 440, 140);
        this.#context.lineTo(this.#offset+ 430, 160);
        this.#context.lineTo(this.#offset+ 355, 160);
        this.#context.closePath();
        this.#context.stroke();

        // middle _ part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 325, 140);
        this.#context.lineTo(this.#offset+ 325, 250);
        this.#context.lineTo(this.#offset+ 345, 235);
        this.#context.lineTo(this.#offset+ 345, 140);
        this.#context.closePath();
        this.#context.stroke();

        // middle part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 325, 255);
        this.#context.lineTo(this.#offset+ 350, 245);
        this.#context.lineTo(this.#offset+ 440, 245);
        this.#context.lineTo(this.#offset+ 440, 265);
        this.#context.lineTo(this.#offset+ 350, 265);
        this.#context.closePath();
        this.#context.stroke();

        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 420, 275);
        this.#context.lineTo(this.#offset+ 420, 380);
        this.#context.lineTo(this.#offset+ 440, 365);
        this.#context.lineTo(this.#offset+ 440, 275);
        this.#context.closePath();
        this.#context.stroke();

        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 325, 360);
        this.#context.lineTo(this.#offset+ 410, 360);
        this.#context.lineTo(this.#offset+ 410, 380);
        this.#context.lineTo(this.#offset+ 335, 380);
        this.#context.closePath();
        this.#context.stroke();
    }

    #draw6(){

        // top part    
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 355, 140);
        this.#context.lineTo(this.#offset+ 440, 140);
        this.#context.lineTo(this.#offset+ 430, 160);
        this.#context.lineTo(this.#offset+ 355, 160);
        this.#context.closePath();
        this.#context.stroke();

        // middle part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 325, 140);
        this.#context.lineTo(this.#offset+ 325, 250);
        this.#context.lineTo(this.#offset+ 345, 235);
        this.#context.lineTo(this.#offset+ 345, 140);
        this.#context.closePath();
        this.#context.stroke();

        // middle part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 325, 255);
        this.#context.lineTo(this.#offset+ 350, 245);
        this.#context.lineTo(this.#offset+ 440, 245);
        this.#context.lineTo(this.#offset+ 440, 265);
        this.#context.lineTo(this.#offset+ 350, 265);
        this.#context.closePath();
        this.#context.stroke();

        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 420, 275);
        this.#context.lineTo(this.#offset+ 420, 380);
        this.#context.lineTo(this.#offset+ 440, 365);
        this.#context.lineTo(this.#offset+ 440, 275);
        this.#context.closePath();
        this.#context.stroke();

        // linking bottom part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 320, 275);
        this.#context.lineTo(this.#offset+ 345, 275);
        this.#context.lineTo(this.#offset+ 345, 353);
        this.#context.lineTo(this.#offset+ 320, 353);
    }

    #draw7(){

        // top part    
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 345, 140);
        this.#context.lineTo(this.#offset+ 420, 140);
        this.#context.lineTo(this.#offset+ 420, 160);
        this.#context.lineTo(this.#offset+ 345, 160);
        this.#context.closePath();
        this.#context.stroke();

        // middle part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 325, 140);
        this.#context.lineTo(this.#offset+ 325, 250);
        this.#context.lineTo(this.#offset+ 345, 235);
        this.#context.lineTo(this.#offset+ 345, 140);
        this.#context.closePath();
        this.#context.stroke();

        // bar part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 420, 140);
        this.#context.lineTo(this.#offset+ 450, 140);
        this.#context.lineTo(this.#offset+ 450, 390);
        this.#context.lineTo(this.#offset+ 420, 390);
        this.#context.closePath();
        this.#context.stroke();
    }

    #draw8(){

        // top part    
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 345, 140);
        this.#context.lineTo(this.#offset+ 440, 140);
        this.#context.lineTo(this.#offset+ 440, 160);
        this.#context.lineTo(this.#offset+ 345, 160);
        this.#context.closePath();
        this.#context.stroke();

        // top part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 425, 170);
        this.#context.lineTo(this.#offset+ 425, 235);
        this.#context.lineTo(this.#offset+ 445, 235);
        this.#context.lineTo(this.#offset+ 445, 170);
        this.#context.closePath();
        this.#context.stroke();


        // top part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 325, 140);
        this.#context.lineTo(this.#offset+ 325, 250);
        this.#context.lineTo(this.#offset+ 345, 235);
        this.#context.lineTo(this.#offset+ 345, 140);
        this.#context.closePath();
        this.#context.stroke();

        // middle part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 325, 255);
        this.#context.lineTo(this.#offset+ 350, 245);
        this.#context.lineTo(this.#offset+ 440, 245);
        this.#context.lineTo(this.#offset+ 440, 265);
        this.#context.lineTo(this.#offset+ 350, 265);
        this.#context.closePath();
        this.#context.stroke();

        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 420, 275);
        this.#context.lineTo(this.#offset+ 420, 380);
        this.#context.lineTo(this.#offset+ 440, 365);
        this.#context.lineTo(this.#offset+ 440, 275);
        this.#context.closePath();
        this.#context.stroke();

        // linking bottom part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 325, 275);
        this.#context.lineTo(this.#offset+ 350, 275);
        this.#context.lineTo(this.#offset+ 350, 353);
        this.#context.lineTo(this.#offset+ 325, 353);
        this.#context.closePath();
        this.#context.stroke();


        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 325, 370);
        this.#context.lineTo(this.#offset+ 410, 370);
        this.#context.lineTo(this.#offset+ 410, 390);
        this.#context.lineTo(this.#offset+ 335, 390);
        this.#context.closePath();
        this.#context.stroke();
    }

    #draw9(){

        // top part    
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 345, 140);
        this.#context.lineTo(this.#offset+ 440, 140);
        this.#context.lineTo(this.#offset+ 440, 160);
        this.#context.lineTo(this.#offset+ 345, 160);
        this.#context.closePath();
        this.#context.stroke();

        // top part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 425, 170);
        this.#context.lineTo(this.#offset+ 425, 235);
        this.#context.lineTo(this.#offset+ 445, 235);
        this.#context.lineTo(this.#offset+ 445, 170);
        this.#context.closePath();
        this.#context.stroke();


        // top part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 325, 140);
        this.#context.lineTo(this.#offset+ 325, 250);
        this.#context.lineTo(this.#offset+ 345, 235);
        this.#context.lineTo(this.#offset+ 345, 140);
        this.#context.closePath();
        this.#context.stroke();

        // middle part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 325, 255);
        this.#context.lineTo(this.#offset+ 350, 245);
        this.#context.lineTo(this.#offset+ 440, 245);
        this.#context.lineTo(this.#offset+ 440, 265);
        this.#context.lineTo(this.#offset+ 350, 265);
        this.#context.closePath();
        this.#context.stroke();

        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 420, 275);
        this.#context.lineTo(this.#offset+ 420, 380);
        this.#context.lineTo(this.#offset+ 440, 365);
        this.#context.lineTo(this.#offset+ 440, 275);
        this.#context.closePath();
        this.#context.stroke();
    }

    #draw0(){

        // top part    
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 345, 140);
        this.#context.lineTo(this.#offset+ 440, 140);
        this.#context.lineTo(this.#offset+ 440, 160);
        this.#context.lineTo(this.#offset+ 345, 160);
        this.#context.closePath();
        this.#context.stroke();

        // top part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 420, 170);
        this.#context.lineTo(this.#offset+ 420, 255);
        this.#context.lineTo(this.#offset+ 440, 255);
        this.#context.lineTo(this.#offset+ 440, 170);
        this.#context.closePath();
        this.#context.stroke();

        // top part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 325, 140);
        this.#context.lineTo(this.#offset+ 325, 250);
        this.#context.lineTo(this.#offset+ 345, 235);
        this.#context.lineTo(this.#offset+ 345, 140);
        this.#context.closePath();
        this.#context.stroke();

        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 420, 275);
        this.#context.lineTo(this.#offset+ 420, 380);
        this.#context.lineTo(this.#offset+ 440, 365);
        this.#context.lineTo(this.#offset+ 440, 275);
        this.#context.closePath();
        this.#context.stroke();

        // linking bottom part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 325, 275);
        this.#context.lineTo(this.#offset+ 348, 275);
        this.#context.lineTo(this.#offset+ 348, 363);
        this.#context.lineTo(this.#offset+ 325, 363);
        this.#context.closePath();
        this.#context.stroke();

        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(this.#offset+ 325, 370);
        this.#context.lineTo(this.#offset+ 410, 370);
        this.#context.lineTo(this.#offset+ 410, 390);
        this.#context.lineTo(this.#offset+ 335, 390);
        this.#context.closePath();
        this.#context.stroke();
    }

    #clearTimeGraphics(){
        // clear 2 digits to the left of divisor
        this.#context.clearRect(300,120, 350, 300);
        // clear 2 digits to the right of divisor
        this.#context.clearRect(730,120, 330, 300);
    }

    #drawDivider(){

        // first dimond
        this.#context.beginPath();
        this.#context.moveTo(700, 180);
        this.#context.lineTo(680, 200);
        this.#context.lineTo(700, 220);
        this.#context.lineTo(720, 200);
        this.#context.closePath();
        this.#context.stroke();

        // second dimond
        this.#context.beginPath();
        this.#context.moveTo(700, 280);
        this.#context.lineTo(680, 300);
        this.#context.lineTo(700, 320);
        this.#context.lineTo(720, 300);
        this.#context.closePath();
        this.#context.stroke();
    }

    #writeCurrentDate(){
        let currentDate = this.#dateObj.toLocaleDateString();
        this.#context.fillText(currentDate, 100, 140);
    }
    getTimeDifference(startTime){
        const oneSecond = 1000;
        let date = new Date();
        let elapsed = (date.getTime() - startTime) / oneSecond;
        return elapsed;
    }

    // converts seconds to minutes:seconds
    #convertTime(number){
        // ! corrisponds to 99:59, this is to prevent an overflow 
        const maxTime = 5999;
        if (number > maxTime){
            return {
                minutes: "0",
                seconds: "0"
            };
        }

        let minutes = Math.floor(number / 60);
        number -= minutes * 60;

        minutes = (minutes < 10)? `0${minutes}`: `${minutes}`;
        number = (number < 10)? `0${number}`: `${number}`;
        
        return {
            minutes: minutes,
            seconds: number
        };
    }

    // function that maps a digit to a private function call to draw it
    #drawDigit(digit){
        if (digit === "0"){
            this.#draw0()
        } 
        else if (digit === "1"){
            this.#draw1()
        }
        else if (digit === "2"){
            this.#draw2()
        }
        else if (digit === "3"){
            this.#draw3()
        }
        else if (digit === "4"){
            this.#draw4()
        }
        else if (digit === "5"){
            this.#draw5()
        }
        else if (digit === "6"){
            this.#draw6()
        }
        else if (digit === "7"){
            this.#draw7()
        }
        else if (digit === "8"){
            this.#draw8()
        }
        else if (digit === "9"){
            this.#draw9()
        }
    }


    drawTime(time){

        this.#clearTimeGraphics();
        // offset by 300px
        this.#offset = 0;
        let {minutes, seconds} = this.#convertTime(time);

        // draw graphics for minutes
        for (const digit of minutes){
            this.#drawDigit(digit)
            this.#offset += 150;
        }

        // start placing digits to the right of the devisior
        this.#offset = 450;
        // draw graphics for seconds 
        for (const digit of seconds){
            this.#drawDigit(digit)
            this.#offset += 150;
        }
    }
}


export default ClockTime;