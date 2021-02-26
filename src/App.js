import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Rating from './components/Rating';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList />
        <Rating />
      </div>
    );
  }
}
export default App;
