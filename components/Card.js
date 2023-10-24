import React from "react"

function Card(props) {
    return (
        <section className='card'>
            <img
                src={`./images/${props.img}`}
                className='card--image'
                alt='card'
            />
            <div className='card--text'>
                <div className='card--stats'>
                    <img src='../images/star.png' className='card--star' />
                    <span>{props.rating}</span>
                    <span className='gray'>({props.reviewCount}) • </span>
                    <span className='gray'>{props.location}</span>
                </div>
                <p>{props.title}</p>
                <p>
                    <span className='bold'>From ${props.price}</span> / person
                </p>
            </div>
        </section>
    )
}

export default Card
