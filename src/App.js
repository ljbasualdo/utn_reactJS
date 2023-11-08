import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import Ejemplo01 from './pages/Ejemplo01';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* Acá todas las rutas */}
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/ejemplo1' element={<Ejemplo01/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;