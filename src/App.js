import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

/* Components */
import Main from "./pages/main";
import Works from "./pages/works";
import ErrorPage from "./pages/404";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route exact path="/works" element={<Works/>} />
          <Route path="/404" element={<ErrorPage/>} />
          <Route path="*" element={<Navigate to="/404" />}/>
        </Routes>
      </Router>
  );
}

export default App;
