import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* Acá todas las rutas */}
          {/* <Route path='/' element={nombredelcomponente}></Route> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
