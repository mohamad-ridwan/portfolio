import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import NavbarMobile from './components/navbarmobile/NavbarMobile';
import Home from './pages/Home';
import Teknikal from './pages/Teknikal';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <NavbarMobile />
    <Routes>
      <>
      <Route path="/teknikal/:id" element={<Teknikal />} />
      <Route path="/" element={<Home />} />
      </>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
