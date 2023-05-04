import React from 'react';
import './App.css';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import FullSushi from './pages/FullSushi';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <div className="wrapper">
          <Header />
          <div className="content">
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='/sushi/:id' element={<FullSushi />}/>
                <Route path='*' element={<NotFound />}/>
              </Routes>
          </div>
      </div>
    </>
  );
}

export default App;
