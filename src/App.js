import React from 'react';
import './App.css';
import Header from './components/Header';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header movies={data}/>
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      Hora de codar! 🚀✍️👨‍💻👩‍💻💪
    </div>
  );
}

export default App;
