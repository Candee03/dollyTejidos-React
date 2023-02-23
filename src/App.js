import './App.scss';
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

let contador = 0;

const App = () => {
  const [count, setCount] = useState(`Clicks:${0} Fecha:${Date()}`)
  const updateCount = () => {
    contador ++
    setCount (`Clicks:${contador} Fecha:${Date()}`)
  }


  const fetchProductos = () => {
    const ulProductos = document.getElementById('ul-productos')
    ulProductos.textContent=`cargando productos...`

    return (new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve ({ 
          id:1,
          nombre: 'poncho', 
          precio:5000
        })
      },5000)

      })
    )
  }

  const cargarProductos = () => {
    fetchProductos().then(data => {
      const ulProductos = document.getElementById('ul-productos')
      ulProductos.textContent=`Nombre:${data.nombre} Precio: ${data.precio}`
    })
  }


  return (
    <>
    <div className='cont-header'>
      <NavBar />
    </div>
    <main className='main'>
      <ItemListContainer greeting= {count} />
      <button onClick={updateCount}> actualizar</button>
      <button onClick={cargarProductos}> Mostrar Producto</button>
      <ul id='ul-productos'></ul>
    </main>
    </>
  );
};

export default App;
