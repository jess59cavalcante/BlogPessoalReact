import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Cadastro from './paginas/cadastro/Cadastro';
import Login from './paginas/login/Login';
import Footer from './components/estaticos/footer/Footer';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tema" element={<ListaTema />} />
          <Route path="/postagem" element={<ListaPostagem />} />
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
