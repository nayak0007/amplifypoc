import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AppRouter from './navigation/AppRouter';

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRouter/>
    </div>
  );
}

export default App;
