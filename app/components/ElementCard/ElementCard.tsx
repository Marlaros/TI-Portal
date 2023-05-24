import React from 'react'
import Image from 'next/image'
import './ElementCard.css'

const ElementCard = ({name, description, image, handleClick}: {name: string, description: string, image: string, handleClick: (value:string) => any}) => {
    return (
        <div className="element-card">
            <button key={name} onClick={() => handleClick(name)}>
                <p className="element-card-title">{name}</p>
                <Image
                    className="element-card-image"
                    src={image}
                    alt={"Image for " + name}
                    width={175}
                    height={150}
                />
                <p className="element-card-desc">{description}</p>
            </button>
        </div>
    )
}

export default ElementCard;