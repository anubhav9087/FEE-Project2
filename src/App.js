import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Translate from "./components/Translate";
import LoginSignUp from "./LoginSignUp/LoginSignUp";

function App() {
  return (
    
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginSignUp />} />
          <Route path="/translate" element={<Translate />} />
        </Routes>
      </Router>
    
  );
}

export default App;
