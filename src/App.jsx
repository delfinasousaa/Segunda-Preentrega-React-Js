import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;