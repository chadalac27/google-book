import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Search from './components/Search';
import React from 'react';

function App() {
  
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/search" exact component={Search} />
    </div>
  );
}

export default App;
