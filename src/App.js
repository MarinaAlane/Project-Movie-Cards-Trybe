import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header movies={movies}/>
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      Hora de codar! 🚀✍️👨‍💻👩‍💻💪
    </div>
  );
}

export default App;
