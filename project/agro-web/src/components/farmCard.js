import React from 'react';

const FarmCard = ({ farm }) => {
    return (
        <div className="farm-card">
            <img src={farm.image} alt={farm.name} className="farm-image" />
            <h2 className="farm-name">{farm.name}</h2>
            <p className="farm-crop-type">Tipo de Cultivo: {farm.cropType}</p>
            <p className="farm-description">{farm.description}</p>
        </div>
    );
};

export default FarmCard;