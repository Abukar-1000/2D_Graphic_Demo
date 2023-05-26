# Overview
<p>For each Class/Component the fromat will be: </p>

* Class / Component
    * Details

# ClockTime
<p> Class meant to encapsulate all the functionality of the timer</p>

## Attributes
* context: private referece to the canvas context object.
* offset: private integer varaible to keep track of spacing between digits.
* dateObj: private refference to a JavaScript date object.
## Methods
### draw1()
* Private method, returns nothing.
* Draws the digit 1 onto the canvas using the private context attribure.
### draw2()
* Private method, returns nothing.
* Draws the digit 2 onto the canvas using the private context attribure.
### draw3()
* Private method, returns nothing.
* Draws the digit 3 onto the canvas using the private context attribure.
### draw4()
* Private method, returns nothing.
* Draws the digit 4 onto the canvas using the private context attribure.
### draw5()
* Private method, returns nothing.
* Draws the digit 5 onto the canvas using the private context attribure.
### draw6()
* Private method, returns nothing.
* Draws the digit 6 onto the canvas using the private context attribure.
### draw7()
* Private method, returns nothing.
* Draws the digit 7 onto the canvas using the private context attribure.
### draw8()
* Private method, returns nothing.
* Draws the digit 8 onto the canvas using the private context attribure.
### draw9()
* Private method, returns nothing.
* Draws the digit 9 onto the canvas using the private context attribure.
### draw0()
* Private method, returns nothing.
* Draws the digit 0 onto the canvas using the private context attribure.
### drawArcForElapsedTime( time )
* Given a JavaScript object containing the current minute and seconds, draws <br>
  two arcs to convey the elapsed time respectively.
### clearTimeGraphics()
* Clears regions of the canvas where the drawn graphics where displayed.
* These regions include:
    * Area of the 2 digits to the left of the devisor.
    * Area of the 2 digits to the right of the devisor.
    * Area where the arcs where drawn.
### drawDivider()
* Private method.
* Draws the dimond shaped devidors separating the 2 digits to the right <br>
  and the 2 digits to the left.
### writeCurrentDate()
* Private method.
* Writes the current date as text onto the canvas.
* This is displayed on the top left corner of the clock.
### convertTime( number )
* Private method.
* The current time is delt with in terms of seconds.
* This converts the elapsed time, into minutes and seconds.
### drawDigit( digit )
* Private method.
* This method acts like a map between the private methods previously created.
* Given a string digit, it will call the corrisponding custom function to <br>
  draw it on the UI.
### `drawTime( digit )`
* Public method.
* Given the current amount of elapsed seconds, it:
    * Clears previous regions of intreset using `clearTimeGraphics()` method.
    * Draws the corrisponding minutes and seconds on the canvas.
    * Draws the arcs on the screen. 

