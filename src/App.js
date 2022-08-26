import React from 'react';
import './App.css';
import HomePage from "./pages/Home/Home";
import OverOns from "./pages/OverOns/OverOns";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import MyPixam from "./pages/MyPixam/MyPixam";
import FotoDetails from "./pages/FotoDetails/FotoDetails";
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

