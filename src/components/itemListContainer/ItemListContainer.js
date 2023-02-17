import './ItemListContainer.scss';
import React from "react";


const ItemListContainer = ({saludo}) => {
    return (
        <div className='cont-items'>
            <h1 className='saludo'>{saludo}</h1>
        </div>
    );
};

export default ItemListContainer;