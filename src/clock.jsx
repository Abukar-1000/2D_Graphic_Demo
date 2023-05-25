/*
    This is a canvas that will dynamically draw a new clock onto the screen
*/

import { React, useEffect, useState } from "react"
import ClockTime from "./clockTime";


/*
    clearing graphics 
        Date text and arc performance graphic is only updated when the timer is stoped.
        Therefore we only clear that section when the timer is stoped.
*/

function drawArc(con, time) {
    // range of circle is 60 minutes and 60 seconds
    const [maxMinutes, maxSeconds] = [60, 60]; 
    
    let minuteRadians = (30/maxMinutes) * 2 * Math.PI; 
    let SecondsRadians = (56/maxMinutes) * 2 * Math.PI;

    con.strokeStyle = "red";
    con.beginPath();
    con.arc(200, 220, 50, 0, minuteRadians, false);
    con.stroke();
    con.closePath();

    con.fillText("XX", 180, 230)


    // second arc
    con.beginPath();
    con.arc(200, 350, 50, 0, SecondsRadians, false);
    con.stroke();
    con.closePath();

    con.fillText("XX", 180, 360)
}


function Clock(props){

    let [state, updateState] = useState({
        btnText: "Start Timer",
        buttonStyle: "btn btn-lg btn-outline-success",
        elapsedSeconds: 0,
        intervalID: null
    });

    
    // callback function that handles clock interaction
    let startOrStopClock = event => {

        if (state.btnText === "Start Timer"){
            updateState(prevState => {
                return {
                    btnText: "Stop Timer",
                    buttonStyle: "btn btn-lg btn-outline-danger",
                    elapsedSeconds: prevState.elapsedSeconds,
                    intervalID: prevState.intervalID
                }
            })

            // start timer

        } else {
            updateState(prevState => {
                clearInterval(prevState.intervalID);    
                return {
                    btnText: "Start Timer",
                    buttonStyle: "btn btn-lg btn-outline-success",
                    elapsedSeconds: 0,
                    intervalID: null
                }   
            })
            // stop timer
        }

    }


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
        const oneSecond = 1000;
        let clock = document.getElementById("clockCanvas");
        let con = clock.getContext("2d");
        let generator = new ClockTime(con);

        // drawArc(con, 120);
        // graphic to divide the clock into 2 regions 
        // drawDevider(con)
        generator.drawTime(state.elapsedSeconds);
        drawClockImg();
        
        // handles timer count up
        const countUp = () => {
            if (state.btnText === "Start Timer"){

                // stop the timer
                updateState(prevState => {
                    clearInterval(prevState.intervalID);
                    return {
                        btnText: prevState.btnText,
                        buttonStyle: "btn btn-lg btn-outline-danger",
                        elapsedSeconds: state.elapsedSeconds,
                        intervalID: null
                    }
                })
            } else {

                // update the timer to the next second
                updateState(prevState => {
                    generator.drawTime(prevState.elapsedSeconds + 1);
                    return {
                        btnText: prevState.btnText,
                        buttonStyle: prevState.buttonStyle,
                        intervalID: prevState.intervalID,
                        elapsedSeconds: prevState.elapsedSeconds + 1
                    }
                });
            }
        }


        let startButtonClicked = state.btnText === "Stop Timer"; 
        if (startButtonClicked){
            state.intervalID = setInterval(countUp, oneSecond)
        }

        // if the page gets reloaded, then reload the image as {disply: none} removes it from the dom, which wont let me query it after
        // going to remove the .hidden so I can query for the image
        window.onunload = (e) => {
            let clockBody = document.querySelector(".clockDiv");
            clockBody.innerHTML = `
            <img src="clockBaseImg.png" className="clockImage" alt="clock image"/>
            <canvas id="clockCanvas" width = "1200" height = "500" ></canvas>
            <button type="button" className= "btn btn-outline-success">Start</button>
            `;
        }
        window.onload = e => {
            drawClockImg();
        }

    }, [state.btnText])


    return <div className="clockDiv">
        <img src="clockBaseImg.png" className="clockImage" alt="clock image"/>
        <canvas id="clockCanvas" width = "1200" height = "500" ></canvas>
        <div className="buttonSection">
            <button onClick={startOrStopClock} type="button" className= {state.buttonStyle} >{state.btnText}</button>
        </div>
    </div>
}


export default Clock;