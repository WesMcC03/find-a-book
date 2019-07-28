import React from 'react';
import './App.css';
import Books from "./Searches/Books";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Books />
    </div>
  );
}

export default App;
