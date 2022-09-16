import React from 'react';
import "./components/staail/App.css";
import { BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom'
import About from "./pages/About";
import Navbar from './pages/Navbar';
import Posts from './pages/Posts';
import Hed from  "./components/Hed"
function App() {
    return (
      <div>
        <a href="/about">gfdgdfgdf</a>
        <hr/>
        <a href="/">zak</a>
        <Router>
          <Routes>
            <Route exact path='/about' element={<About/>}/>
          </Routes>
        </Router>
        
        <Posts/>
      </div>
    );
};

export default App;
