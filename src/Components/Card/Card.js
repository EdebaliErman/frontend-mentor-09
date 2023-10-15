import React from 'react'

function Card({ name, headText, text, img, clas }) {
    return (
        <div className={clas}>
            <div className='head-profile'>
                <img src={img} alt={img} />
                <div>
                    <h3>{name}</h3>
                    <h4>Verified Graduate</h4>
                </div>
            </div>
            <div className='paragraph'>
                <h1>{headText}</h1>
                <h2>{text}</h2>
            </div>
        </div>
    )
}

export default Card


