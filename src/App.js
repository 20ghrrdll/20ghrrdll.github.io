import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Routes>
          <Route exact path="/" element={ <Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects"  element={<Projects />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
