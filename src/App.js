import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./container/user";
import Song from "./container/song";

function App() {
  return (
    <div className="App">
      <User/>
      <Song/>
    </div>
  );
}

export default App;
