import React from "react";
import './ItemDetail.scss'

const ItemDetail = ({producto}) =>{
    return( 
    <div className="cont-detail">
        <li className="li-cont-detail">
            <img className="img-producto" src={producto.img}/>
            <div className="cont-descripcion">
                <p className="p-nombre">{producto.nombre}</p>
                <p className="p-precio">${producto.precio}</p>
                <p className="p-descripcion">Descripcion:{producto.description}</p>
            </div>
        </li>
        <button className="agreg-carr">Agregar al carrito</button>
    </div>
    )
}

export default ItemDetail;