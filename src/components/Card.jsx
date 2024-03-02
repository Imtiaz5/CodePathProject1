// eslint-disable-next-line no-unused-vars
import React from "react";


const Card = ({name, foodType, menuLink, imageSrc}) => {
    return (
        <div className="card">
            
            <div className="image-container" style={{ backgroundImage: `url(${imageSrc})` }}>
            </div>

            <div className="info-container">
                <h2>{name}</h2>
                <p>{foodType}</p>
                <a href={menuLink} target="_blank" rel="noopener noreferrer">
                    <button>View Menu</button>
                </a>
            </div>

        </div>
    );
};

export default Card;