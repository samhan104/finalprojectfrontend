import React from 'react'
import '../App.css';

function Nav() {

    return (
        <div className='nav'>
            
            <nav className='nav-bar-main'>
                <p id='nav-link'><a href="https://github.com/samhan104/finalprojectapi" target="_blank" rel="noreferrer">Backend Github</a></p>
                <p id='nav-link'><a href="https://github.com/samhan104/finalprojectfrontend" target="_blank" rel="noreferrer">Frontend Github</a></p>
                <p id='nav-link'><a href="https://github.com/samhan104/finalprojectbackend" target="_blank" rel="noreferrer">Discord Bot Github</a></p>
            </nav>
        </div>
    )
}

export default Nav


