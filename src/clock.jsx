/*
    This is a canvas that will dynamically draw a new clock onto the screen
*/

import { React, useEffect } from "react"

function testDraw(con){
    con.fillStyle = "red";
    con.font = "20pt sans-serif";
    con.fillText("Canvas Rocks!", 200, 300);
}


function Clock(props){

    const drawClockImg = () =>{
        let clock = document.getElementById("clockCanvas");
        let clockImage = document.querySelector(".clockImage");
        let con = clock.getContext("2d");
        con.drawImage(clockImage, 0, 0, 1200, 500);
        // hide the image after we grab the contents
        clockImage.classList.add("hidden");
    }
    // draw the clock image on the canvas
    useEffect(() => {
        let clock = document.getElementById("clockCanvas");
        let con = clock.getContext("2d");
        testDraw(con);
        drawClockImg();
        // if the page gets reloaded, then reload the image as {disply: none} removes it from the dom, which wont let me query it after
        // going to remove the .hidden so I can query for the image
        window.onunload = (e) => {
            let clockBody = document.querySelector(".clockDiv");
            clockBody.innerHTML = `
            <img src="clockBaseImg.png" className="clockImage" alt="clock image"/>
            <canvas id="clockCanvas" width = "1200" height = "500" ></canvas>
            `;
        }
        window.onload = e => {
            drawClockImg();
        }
    })
    return <div className="clockDiv">
        <img src="clockBaseImg.png" className="clockImage" alt="clock image"/>
        <canvas id="clockCanvas" width = "1200" height = "500" ></canvas>
    </div>
}


export default Clock;