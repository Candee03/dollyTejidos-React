import './App.scss';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';


const App = () => {
  return (
    <>
    <div className='cont-header'>
      <NavBar />
    </div>
    <main className='main'>
      <ItemListContainer saludo={'¡Bienvenidos a mi tienda de tejidos!'} />
    </main>
    </>
  );
};

export default App;
