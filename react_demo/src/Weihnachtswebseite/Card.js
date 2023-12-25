import React from 'react'

export default function Card({name, ImageUri}) {
    return (
        <div className='border'>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <img src={ImageUri} alt=''></img>
            </div>
        </div>
    )
}
