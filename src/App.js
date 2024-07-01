import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue sur mon site React!</h1>
        <nav>
          <ul className="nav-menu">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;