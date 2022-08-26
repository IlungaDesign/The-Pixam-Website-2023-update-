import React from 'react';
import './App.css';
import HomePage from "./Pages/Home";
import OverOns from "./Pages/OverOns";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import MyPixam from "./Pages/MyPixam";
import FotoDetails from "./Pages/FotoDetails";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (

        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage/>}>
                </Route>
                <Route path="/foto-details" element={<FotoDetails/>}>
                </Route>
                <Route path="/over-ons" element={<OverOns/>}>
                </Route>
                <Route path="/contact" element={<Contact/>}>
                </Route>
                <Route path="/login" element={<Login/>}>
                </Route>
                <Route path="/my-pixam" element={<MyPixam/>}>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

