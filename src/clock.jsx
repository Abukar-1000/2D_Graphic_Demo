/*
    This is a canvas that will dynamically draw a new clock onto the screen
*/
import { useEffect } from "react"

function Clock(props){

    // insert the image
    useEffect(() => {
        let clock = document.getElementById("clockCanvas");
        let image = new Image();
        image.src = "clockBaseImg.jpg";

        console.log(clock)
        let con = clock.getContext("2D");
        con.drawImage(image);
    })
    return <>
        <canvas id={"clockCanvas"} width = {"1200"} height = {"500"} ></canvas>
    </>
}


export default Clock;