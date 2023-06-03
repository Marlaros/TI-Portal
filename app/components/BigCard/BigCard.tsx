import React from 'react'
import Image from 'next/image'
import './BigCard.css'

const BigCard = ({name, description, image}: {name: string, description: string, image: string}) => {
    return (
        <div className="big-card-section">
            <div className="big-card-header">
                {name}
            </div>
            <div>
                <Image
                    className="big-card-image"
                    src={image}
                    alt={"Image for " +  name}
                    width={450}
                    height={450}
                />
            </div>
            <div>
                <p className="big-card-description">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default BigCard;