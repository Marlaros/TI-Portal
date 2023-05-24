import React from 'react';
import Image from 'next/image';
import './FloatingCard.css'

const FloatingCard = ({name, description, image, handleClick}: {name: string, description: string, image: string, handleClick: (value: string) => any}) => {
    return (
        <a key={name} className="floating-card" onClick={() => handleClick(name)}>
            <h3 className="floating-card-title">{name}</h3>
            <Image
                className="floating-card-image"
                src={image}
                alt={"Image for " + name}
                width={220}
                height={220}/>
            <p className="floating-card-subtitle">{description}</p>
        </a>
    )
}

export default FloatingCard;