

# Documentation &ensp; <img src="public/headerIcon.png" width="25" height="25">
This is my implementation of 2D graphics primitives <br>
Click [HERE](https://main--merry-praline-dac29c.netlify.app/) to take a look.

## [View Function/Method Documentaion](src/ducumentation/functions.md)

## Implementation of Requirements &ensp; <img src="public/implementation.png" width="25" height="25">
* Basic Shapes
    * All the numbers displayed on the timer where drawn onto the canvas to meet this requirement.    
    * I've decided to implement a digital timer, allowing me to experiment with the polygraphic <br>
      design of each digit.
    * As for Arcs I've decided to implement 2 arcs growing in length as the timer increases.
        * The top arc represents elapsed minutes.
        * The bottom arc represents elapsed seconds.
* Rendered Text
    * The current date is rendered as test on the top left of the canvas.
* Image render
    * I've Decided to render an image of a clock, to match the theme of a timer program
* Loops, Interactivity, Animation
    * In my implementation, all there are inter-connected.
    * First for interactivity, there is a start timer button.
    * Once the button is clicked, Ive add a loop to update the <br>
      current elapsed time.
    * Lastly for the animation, after the elapsed time is updated <br>
      we must also update the UI to reflect this change. Once the UI <br>
      is updated, this creates a digital animation.

## Logic  &ensp; <img src="public/logic.png" width="25" height="25">
* User clicks the `Start Timer`, the only button on screen.
* This will trigger a state change and cause a loop to begin.
* In the loop:
    * Check if the user has clicked `Stop Timer`
        * If so break loop. 
    * We increment the elapsed seconds.
    * Update the UI.
## Small Nuances  &ensp; <img src="public/nuance.png" width="25" height="25">
* If the user refreshes the page, the loaded image is lost from the DOM.
    * This was due to the `.hidden` css property previously applied.
* To handle this I:
    * Alter the html content to remove `.hidden` css style when the page <br>
      is refreshed.
    * Re-draw the canvas image after the page has reloaded.

        
## Credits  &ensp; <img src="public/credit.png" width="25" height="25">
* Icons: 
    * <a href="https://www.flaticon.com/free-icons/document" title="document icons">Document icons created by Freepik Flaticon</a>
* Clock Image:
    * <a href="https://stock.adobe.com/Library/urn:aaid:sc:US:d7f9259d-5e63-427c-823d-a217f93a4126?asset_id=281630869">Licensed fromAdobe Stock</a>


# Thanks For Stopping By 😎
