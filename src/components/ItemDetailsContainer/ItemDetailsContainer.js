import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../../productos";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailsContainer = () => {
    const {idProduct} = useParams()
    const [listProducts, setListProducts] = useState([])
    useEffect (() => {
        productos().then((data) => {
            setListProducts(data.find((producto)=> producto.id === Number(idProduct)));
        })
    }, [])

    return (
        <div className='cont-items'>
            <ItemDetail producto={listProducts}/>
        </div>
    );
};

export default ItemDetailsContainer;