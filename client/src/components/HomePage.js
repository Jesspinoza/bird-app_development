import React from "react"

const HomePage = (props) => {
    return(
        <div className="home-title">
                <img className="home-image" src="https://bird-application.s3.amazonaws.com/Hotpot+(2).png"
                    alt="bird app logo"> 
                </img>
            <h2 >Birds Eye View</h2>
            <h3>A Birding App for Bird Enthusiasts!</h3>
                
            <div>
                <p>Developed by Jessica Espinoza</p>
            </div>
        </div>
    )
}

export default HomePage