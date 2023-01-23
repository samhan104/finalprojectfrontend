import React from "react";
import '../App.css';

function Home() {
    return (
        <>
            <div className="intro-box">
                <h1 className="title-name">VERY SIMPLE CODING DISCORD QUIZ BOT</h1>
                <div className="i-am">
                    <p>I coded a very simple discord bot that asks coding questions I learned throughout my bootcamp. All you have to do is !quiz for it to ask a question</p>
                </div>
                <a className="resumelink" href={process.env.REACT_APP_DISCORD} target="_blank" rel="noreferrer"><button className="resumebutton">Add the Bot</button></a>
            </div>
        </>
    )
}

export default Home