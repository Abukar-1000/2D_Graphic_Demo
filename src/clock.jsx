/*
    This is a canvas that will dynamically draw a new clock onto the screen
*/

import { React, useEffect } from "react"
import ClockTime from "./clockTime";

function testDraw(con){
    con.fillStyle = "red";
    con.font = "20pt sans-serif";
    con.fillText("Canvas Rocks!", 100, 140);
}

function draw1(con, offset){
    con.fillStyle = "red";
    con.strokeStyle = "red";
    con.lineWidth = "3";

    // top part    
    con.beginPath();
    con.moveTo(offset + 345, 140);
    con.lineTo(offset + 440, 140);
    con.lineTo(offset + 440, 160);
    con.lineTo(offset + 345, 160);
    con.closePath();
    con.stroke();

    // top part
    con.beginPath();
    con.moveTo(offset + 420, 170);
    con.lineTo(offset + 420, 255);
    con.lineTo(offset + 440, 255);
    con.lineTo(offset + 440, 170);
    con.closePath();
    con.stroke();


    // top part
    con.beginPath();
    con.moveTo(offset + 325, 140);
    con.lineTo(offset + 325, 250);
    con.lineTo(offset + 345, 235);
    con.lineTo(offset + 345, 140);
    con.closePath();
    con.stroke();

    // middle part
    // con.beginPath();
    // con.moveTo(offset + 325, 255);
    // con.lineTo(offset + 350, 245);
    // con.lineTo(offset + 440, 245);
    // con.lineTo(offset + 440, 265);
    // con.lineTo(offset + 350, 265);
    // con.closePath();
    // con.stroke();

    // bottom part
    con.beginPath();
    con.moveTo(offset + 420, 275);
    con.lineTo(offset + 420, 380);
    con.lineTo(offset + 440, 365);
    con.lineTo(offset + 440, 275);
    con.closePath();
    con.stroke();

    // linking bottom part
    con.beginPath();
    con.moveTo(offset + 325, 275);
    con.lineTo(offset + 348, 275);
    con.lineTo(offset + 348, 363);
    con.lineTo(offset + 325, 363);
    con.closePath();
    con.stroke();


    // bottom part
    con.beginPath();
    con.moveTo(offset + 325, 370);
    con.lineTo(offset + 410, 370);
    con.lineTo(offset + 410, 390);
    con.lineTo(offset + 335, 390);
    con.closePath();
    con.stroke();

    // bar part
    // con.beginPath();
    // con.moveTo(offset + 420, 140);
    // con.lineTo(offset + 450, 140);
    // con.lineTo(offset + 450, 390);
    // con.lineTo(offset + 420, 390);
    // con.closePath();
    // con.stroke();
}

function drawDevider(con){
    con.fillStyle = "red";
    con.strokeStyle = "red";
    con.lineWidth = "3";

    // first dimond
    con.beginPath();
    con.moveTo(700, 180);
    con.lineTo(680, 200);
    con.lineTo(700, 220);
    con.lineTo(720, 200);
    con.closePath();
    con.stroke();

    // second dimond
    con.beginPath();
    con.moveTo(700, 280);
    con.lineTo(680, 300);
    con.lineTo(700, 320);
    con.lineTo(720, 300);
    con.closePath();
    con.stroke();
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
        draw1(con, 0);

        let generator = new ClockTime(con);

        // graphic to divide the clock into 2 regions 
        // drawDevider(con)
        generator.drawTime();

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