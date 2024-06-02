import React from "react";
import { Outlet } from "react-router";
import Nav from './components/Nav';
import './App.css';

function App({children}) {
  return (
    <React.Fragment>
      <Nav/>
      <div className="App">
        <Outlet/>
      </div>
    </React.Fragment>
        
  );
}

export default App;
