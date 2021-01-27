import React from "react";
import logo from './logo.svg';
import './App.css';
import Sidenavbar from './pages/Sidenavbar';
import Home from "./merges/Home";
import Footer from './pages/Footer';


function App() {
  return (
    <div className="App"> 
      <Sidenavbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
