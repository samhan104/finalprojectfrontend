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
                <a className="resumelink" href="https://discord.com/api/oauth2/authorize?client_id=1065674929640583389&permissions=274877983744&scope=bot" target="_blank" rel="noreferrer"><button className="resumebutton">Add the Bot</button></a>
            </div>
        </>
    )
}

export default Home