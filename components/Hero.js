import React from "react"

function Hero() {
    return (
        <section className='hero'>
            <img
                src='./images/photo-grid.png'
                className='hero--image'
                alt='hero'
            />
            <div className='hero--text'>
                <h1>Online Experiences</h1>
                <h3>
                    Join unique interactive activities led by one-of-a-kind
                    hosts—all without leaving home.
                </h3>
            </div>
        </section>
    )
}

export default Hero
