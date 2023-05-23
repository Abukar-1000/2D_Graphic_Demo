


/*
    Going to take clock image canvas element in the constructor.
    With this it will draw the current time onto the clock image canvas.
    I must say the the purpose of the clock is to act like a timer for the UI.
    to handle all the various x positions a digit can take on the clock, we will pass an offset perameter.
        This allows us to just create the method once, and space them out latter using the offset
    Will also contain the date as text, and will add it to the clock canvas as well. 
*/

class ClockTime {

    #context = null;
    constructor(contextObj){
        this.#context = contextObj;
    }
    
    // draws the number 1 on the canvas
    #draw1(offset){
        // top half
        this.#context.beginPath();
        this.#context.fillStyle = "red";
        this.#context.strokeStyle = "red";
        this.#context.lineWidth = "3";
        this.#context.moveTo(offset + 350, 140);
        this.#context.lineTo(offset + 330, 180);
        this.#context.lineTo(offset + 330, 260);
        this.#context.lineTo(offset + 350, 300);    
        this.#context.closePath();
        this.#context.stroke();

        // bottom half
        this.#context.beginPath()
        this.#context.moveTo(offset + 330, 280);
        this.#context.lineTo(offset + 345, 320);
        this.#context.lineTo(offset + 345, 380);
        this.#context.lineTo(offset + 330, 400);
        this.#context.closePath();
        this.#context.stroke();
    }

    #draw2(offset){
        // top part
        this.#context.beginPath();
        this.#context.fillStyle = "red";
        this.#context.strokeStyle = "red";
        this.#context.lineWidth = "3";
        this.#context.moveTo(offset + 330, 160);
        this.#context.lineTo(offset + 350, 140);
        this.#context.lineTo(offset + 410, 140);
        this.#context.lineTo(offset + 410, 250);
        this.#context.lineTo(offset + 380, 250);
        this.#context.lineTo(offset + 370, 230);
        this.#context.lineTo(offset + 370, 160);
        this.#context.closePath();
        this.#context.stroke();

        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(offset + 360, 230);
        this.#context.lineTo(offset + 330, 230);
        this.#context.lineTo(offset + 330, 300);
        this.#context.lineTo(offset + 350, 320);
        this.#context.lineTo(offset + 390, 320);
        this.#context.lineTo(offset + 410, 300);
        this.#context.lineTo(offset + 360, 270);
        this.#context.closePath();
        this.#context.stroke();
    }

    #draw3(offset){
        // top part
        this.#context.beginPath();
        this.#context.fillStyle = "red";
        this.#context.strokeStyle = "red";
        this.#context.lineWidth = "3";
        this.#context.moveTo(offset + 330, 160);
        this.#context.lineTo(offset + 350, 140);
        this.#context.lineTo(offset + 410, 140);
        this.#context.lineTo(offset + 410, 160);
        this.#context.closePath();
        this.#context.stroke();

        // middle part
        this.#context.beginPath();
        this.#context.moveTo(offset + 330, 260);
        this.#context.lineTo(offset + 350, 240);
        this.#context.lineTo(offset + 410, 240);
        this.#context.lineTo(offset + 410, 260);
        this.#context.closePath();
        this.#context.stroke();


        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(offset + 330, 390);
        this.#context.lineTo(offset + 350, 370);
        this.#context.lineTo(offset + 410, 370);
        this.#context.lineTo(offset + 410, 390);
        this.#context.closePath();
        this.#context.stroke();
        // bar part
        this.#context.beginPath();
        this.#context.moveTo(offset + 420, 140);
        this.#context.lineTo(offset + 450, 140);
        this.#context.lineTo(offset + 450, 390);
        this.#context.lineTo(offset + 420, 390);
        this.#context.closePath();
        this.#context.stroke();
    }

    #draw4(offset){
        this.#context.beginPath();
        this.#context.fillStyle = "red";
        this.#context.strokeStyle = "red";
        this.#context.lineWidth = "3";
        this.#context.moveTo(offset + 325, 140);
        this.#context.lineTo(offset + 325, 250);
        this.#context.lineTo(offset + 345, 235);
        this.#context.lineTo(offset + 345, 140);
        this.#context.closePath();
        this.#context.stroke();

        // middle part
        this.#context.beginPath();
        this.#context.moveTo(offset + 330, 260);
        this.#context.lineTo(offset + 350, 240);
        this.#context.lineTo(offset + 410, 240);
        this.#context.lineTo(offset + 410, 260);
        this.#context.closePath();
        this.#context.stroke();

        // bar part
        this.#context.beginPath();
        this.#context.moveTo(offset + 420, 140);
        this.#context.lineTo(offset + 450, 140);
        this.#context.lineTo(offset + 450, 390);
        this.#context.lineTo(offset + 420, 390);
        this.#context.closePath();
        this.#context.stroke();

    }

    #draw5(offset){
        this.#context.fillStyle = "red";
        this.#context.strokeStyle = "red";
        this.#context.lineWidth = "3";

        // top part    
        this.#context.beginPath();
        this.#context.moveTo(offset + 355, 140);
        this.#context.lineTo(offset + 440, 140);
        this.#context.lineTo(offset + 430, 160);
        this.#context.lineTo(offset + 355, 160);
        this.#context.closePath();
        this.#context.stroke();

        // middle _ part
        this.#context.beginPath();
        this.#context.moveTo(offset + 325, 140);
        this.#context.lineTo(offset + 325, 250);
        this.#context.lineTo(offset + 345, 235);
        this.#context.lineTo(offset + 345, 140);
        this.#context.closePath();
        this.#context.stroke();

        // middle part
        this.#context.beginPath();
        this.#context.moveTo(offset + 325, 255);
        this.#context.lineTo(offset + 350, 245);
        this.#context.lineTo(offset + 440, 245);
        this.#context.lineTo(offset + 440, 265);
        this.#context.lineTo(offset + 350, 265);
        this.#context.closePath();
        this.#context.stroke();

        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(offset + 420, 275);
        this.#context.lineTo(offset + 420, 380);
        this.#context.lineTo(offset + 440, 365);
        this.#context.lineTo(offset + 440, 275);
        this.#context.closePath();
        this.#context.stroke();

        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(offset + 325, 360);
        this.#context.lineTo(offset + 410, 360);
        this.#context.lineTo(offset + 410, 380);
        this.#context.lineTo(offset + 335, 380);
        this.#context.closePath();
    }

    #draw6(offset){
        this.#context.fillStyle = "red";
        this.#context.strokeStyle = "red";
        this.#context.lineWidth = "3";

        // top part    
        this.#context.beginPath();
        this.#context.moveTo(offset + 355, 140);
        this.#context.lineTo(offset + 440, 140);
        this.#context.lineTo(offset + 430, 160);
        this.#context.lineTo(offset + 355, 160);
        this.#context.closePath();
        this.#context.stroke();

        // middle part
        this.#context.beginPath();
        this.#context.moveTo(offset + 325, 140);
        this.#context.lineTo(offset + 325, 250);
        this.#context.lineTo(offset + 345, 235);
        this.#context.lineTo(offset + 345, 140);
        this.#context.closePath();
        this.#context.stroke();

        // middle part
        this.#context.beginPath();
        this.#context.moveTo(offset + 325, 255);
        this.#context.lineTo(offset + 350, 245);
        this.#context.lineTo(offset + 440, 245);
        this.#context.lineTo(offset + 440, 265);
        this.#context.lineTo(offset + 350, 265);
        this.#context.closePath();
        this.#context.stroke();

        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(offset + 420, 275);
        this.#context.lineTo(offset + 420, 380);
        this.#context.lineTo(offset + 440, 365);
        this.#context.lineTo(offset + 440, 275);
        this.#context.closePath();
        this.#context.stroke();

        // linking bottom part
        this.#context.beginPath();
        this.#context.moveTo(offset + 320, 275);
        this.#context.lineTo(offset + 345, 275);
        this.#context.lineTo(offset + 345, 353);
        this.#context.lineTo(offset + 320, 353);
    }

    #draw7(offset){
        this.#context.fillStyle = "red";
        this.#context.strokeStyle = "red";
        this.#context.lineWidth = "3";

        // top part    
        this.#context.beginPath();
        this.#context.moveTo(offset + 345, 140);
        this.#context.lineTo(offset + 420, 140);
        this.#context.lineTo(offset + 420, 160);
        this.#context.lineTo(offset + 345, 160);
        this.#context.closePath();
        this.#context.stroke();

        // middle part
        this.#context.beginPath();
        this.#context.moveTo(offset + 325, 140);
        this.#context.lineTo(offset + 325, 250);
        this.#context.lineTo(offset + 345, 235);
        this.#context.lineTo(offset + 345, 140);
        this.#context.closePath();
        this.#context.stroke();

        // bar part
        this.#context.beginPath();
        this.#context.moveTo(offset + 420, 140);
        this.#context.lineTo(offset + 450, 140);
        this.#context.lineTo(offset + 450, 390);
        this.#context.lineTo(offset + 420, 390);
        this.#context.closePath();
        this.#context.stroke();
    }

    #draw8(offset){
        this.#context.fillStyle = "red";
        this.#context.strokeStyle = "red";
        this.#context.lineWidth = "3";

        // top part    
        this.#context.beginPath();
        this.#context.moveTo(offset + 345, 140);
        this.#context.lineTo(offset + 440, 140);
        this.#context.lineTo(offset + 440, 160);
        this.#context.lineTo(offset + 345, 160);
        this.#context.closePath();
        this.#context.stroke();

        // top part
        this.#context.beginPath();
        this.#context.moveTo(offset + 425, 170);
        this.#context.lineTo(offset + 425, 235);
        this.#context.lineTo(offset + 445, 235);
        this.#context.lineTo(offset + 445, 170);
        this.#context.closePath();
        this.#context.stroke();


        // top part
        this.#context.beginPath();
        this.#context.moveTo(offset + 325, 140);
        this.#context.lineTo(offset + 325, 250);
        this.#context.lineTo(offset + 345, 235);
        this.#context.lineTo(offset + 345, 140);
        this.#context.closePath();
        this.#context.stroke();

        // middle part
        this.#context.beginPath();
        this.#context.moveTo(offset + 325, 255);
        this.#context.lineTo(offset + 350, 245);
        this.#context.lineTo(offset + 440, 245);
        this.#context.lineTo(offset + 440, 265);
        this.#context.lineTo(offset + 350, 265);
        this.#context.closePath();
        this.#context.stroke();

        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(offset + 420, 275);
        this.#context.lineTo(offset + 420, 380);
        this.#context.lineTo(offset + 440, 365);
        this.#context.lineTo(offset + 440, 275);
        this.#context.closePath();
        this.#context.stroke();

        // linking bottom part
        this.#context.beginPath();
        this.#context.moveTo(offset + 325, 275);
        this.#context.lineTo(offset + 350, 275);
        this.#context.lineTo(offset + 350, 353);
        this.#context.lineTo(offset + 325, 353);
        this.#context.closePath();
        this.#context.stroke();


        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(offset + 325, 370);
        this.#context.lineTo(offset + 410, 370);
        this.#context.lineTo(offset + 410, 390);
        this.#context.lineTo(offset + 335, 390);
        this.#context.closePath();
        this.#context.stroke();
    }

    #draw9(offset){
        this.#context.fillStyle = "red";
        this.#context.strokeStyle = "red";
        this.#context.lineWidth = "3";

        // top part    
        this.#context.beginPath();
        this.#context.moveTo(offset + 345, 140);
        this.#context.lineTo(offset + 440, 140);
        this.#context.lineTo(offset + 440, 160);
        this.#context.lineTo(offset + 345, 160);
        this.#context.closePath();
        this.#context.stroke();

        // top part
        this.#context.beginPath();
        this.#context.moveTo(offset + 425, 170);
        this.#context.lineTo(offset + 425, 235);
        this.#context.lineTo(offset + 445, 235);
        this.#context.lineTo(offset + 445, 170);
        this.#context.closePath();
        this.#context.stroke();


        // top part
        this.#context.beginPath();
        this.#context.moveTo(offset + 325, 140);
        this.#context.lineTo(offset + 325, 250);
        this.#context.lineTo(offset + 345, 235);
        this.#context.lineTo(offset + 345, 140);
        this.#context.closePath();
        this.#context.stroke();

        // middle part
        this.#context.beginPath();
        this.#context.moveTo(offset + 325, 255);
        this.#context.lineTo(offset + 350, 245);
        this.#context.lineTo(offset + 440, 245);
        this.#context.lineTo(offset + 440, 265);
        this.#context.lineTo(offset + 350, 265);
        this.#context.closePath();
        this.#context.stroke();

        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(offset + 420, 275);
        this.#context.lineTo(offset + 420, 380);
        this.#context.lineTo(offset + 440, 365);
        this.#context.lineTo(offset + 440, 275);
        this.#context.closePath();
        this.#context.stroke();
    }

    #draw0(offset){
        this.#context.fillStyle = "red";
        this.#context.strokeStyle = "red";
        this.#context.lineWidth = "3";

        // top part    
        this.#context.beginPath();
        this.#context.moveTo(offset + 345, 140);
        this.#context.lineTo(offset + 440, 140);
        this.#context.lineTo(offset + 440, 160);
        this.#context.lineTo(offset + 345, 160);
        this.#context.closePath();
        this.#context.stroke();

        // top part
        this.#context.beginPath();
        this.#context.moveTo(offset + 420, 170);
        this.#context.lineTo(offset + 420, 255);
        this.#context.lineTo(offset + 440, 255);
        this.#context.lineTo(offset + 440, 170);
        this.#context.closePath();
        this.#context.stroke();

        // top part
        this.#context.beginPath();
        this.#context.moveTo(offset + 325, 140);
        this.#context.lineTo(offset + 325, 250);
        this.#context.lineTo(offset + 345, 235);
        this.#context.lineTo(offset + 345, 140);
        this.#context.closePath();
        this.#context.stroke();

        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(offset + 420, 275);
        this.#context.lineTo(offset + 420, 380);
        this.#context.lineTo(offset + 440, 365);
        this.#context.lineTo(offset + 440, 275);
        this.#context.closePath();
        this.#context.stroke();

        // linking bottom part
        this.#context.beginPath();
        this.#context.moveTo(offset + 325, 275);
        this.#context.lineTo(offset + 348, 275);
        this.#context.lineTo(offset + 348, 363);
        this.#context.lineTo(offset + 325, 363);
        this.#context.closePath();
        this.#context.stroke();

        // bottom part
        this.#context.beginPath();
        this.#context.moveTo(offset + 325, 370);
        this.#context.lineTo(offset + 410, 370);
        this.#context.lineTo(offset + 410, 390);
        this.#context.lineTo(offset + 335, 390);
        this.#context.closePath();
        this.#context.stroke();
    }

    getTimeDifference(startTime){
        const oneSecond = 1000;
        let date = new Date();
        let elapsed = (date.getTime() - startTime) / oneSecond;
        return elapsed;
    }
    // function that returns the appropriet numbers to display
    requiredFunctions
    drawTime(){
        let date = new Date();
        let elapsed;
        setTimeout(() => {
            console.log([
                date.toLocaleTimeString(),
                date.toLocaleDateString(),
                this.getTimeDifference(date.getTime())
            ])
        }, 5000);
    }
}


export default ClockTime;