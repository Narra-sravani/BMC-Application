import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Bookings from './Dashboard/Bookings';
import BmcMain from './components/BmcMain';
import Table from "./components/Table";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<BmcMain />} />
          <Route path="/bookings" element={<Table />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
