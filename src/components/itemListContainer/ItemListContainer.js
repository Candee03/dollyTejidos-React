import './ItemListContainer.scss';
import React from "react";


const ItemListContainer = ({greeting}) => {
    return (
        <div className='cont-items'>
            <h1 className='greeting'>{greeting}</h1>
        </div>
    );
};

export default ItemListContainer;