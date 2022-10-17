import './App.css';
import HomePage from "./pages/Home/Home";
// import OverOns from "./pages/OverOns/OverOns";
// import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import MyPixam from "./pages/MyPixam/MyPixam";
import FotoDetails from "./pages/FotoDetails/FotoDetails";
import StartPage from "./pages/StartPage";
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route, Redirect,
// } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import RegisterPage from "./pages/Register/RegisterPage";
// import {AuthContext} from './context/AuthContext'
// import {useContext} from "react";

function App() {

    // const {isAuth} = useContext(AuthContext)

    return (

            <Switch>
                <Route exact path="/" >
                    <StartPage/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <RegisterPage/>
                </Route>
                <Route path="/home-page">
                    <HomePage/>
                    {/*{isAuth? <HomePage/> : <Redirect to="/home-page"/>}*/}
                </Route>

                <Route path="/foto-details/:imageId">
                    <FotoDetails/>
                </Route>

                {/*<Route path="/over-ons" element={<OverOns/>}>*/}
                {/*</Route>*/}
                {/*<Route path="/contact" element={<Contact/>}>*/}
                {/*</Route>*/}

                <Route path="/my-pixam">
                    <MyPixam/>
                </Route>
            </Switch>

    );
}

export default App;
