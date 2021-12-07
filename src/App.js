
import { useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />}>

        </Route>
        <Route exact path="/home" element={<Home />}>

        </Route>
        <Route exact path="/cart" element={<Cart />}>

        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App;
