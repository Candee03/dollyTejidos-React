import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  return (
    <>
    <div className='cont-header'>
      <NavBar />
    </div>
    <main className='main'>
      <ItemListContainer greeting={'¡Bienvenidos a mi tienda!'} />
    </main>
    </>
  );
};

export default App;
