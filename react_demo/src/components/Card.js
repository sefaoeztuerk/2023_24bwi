import React from 'react'

export default function Card({name, title, imageUri}) {
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <h4>{title}</h4>
            </div>
            <div>
                <img src={imageUri} alt=''/>
            </div>



        </div>
        
    
    )
}