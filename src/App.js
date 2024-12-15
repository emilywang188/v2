import logo from './logo.svg';
import './App.css';
import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import ResponsiveAppBar from './ResponsiveAppBar';
// import BasicGrid from './HomeGrid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
