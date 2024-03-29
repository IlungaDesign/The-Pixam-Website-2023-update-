import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from "./context/AuthContext";
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(

    <Router>
        <React.StrictMode>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </React.StrictMode>
    </Router>,
document.getElementById("root")
);

reportWebVitals();
