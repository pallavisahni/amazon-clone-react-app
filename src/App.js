import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Header from "./Header.js";
import Home from "./Home";

function App() {
  return (
    //BEM
    <div className="app">
      {/*Header*/}
      <Header />
      {/*Home*/}
      <Home />
    </div>
  );
}

export default App;
