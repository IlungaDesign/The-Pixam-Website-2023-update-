import './App.css';
import HomePage from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import MyPixam from "./pages/MyPixam/MyPixam";
import FotoDetails from "./pages/FotoDetails/FotoDetails";
import StartPage from "./pages/StartPage/StartPage";
import { Switch, Route, Redirect } from "react-router-dom";
import RegisterPage from "./pages/Register/RegisterPage";
import {AuthContext} from './context/AuthContext'
import {useContext} from "react";

function App() {

    const {isAuth} = useContext(AuthContext)

    return (

            <Switch>
                {console.log(isAuth)}

                <Route exact path="/" >
                    <StartPage/>
                </Route>
                <Route path="/register">
                    <RegisterPage/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/home-page">
                    {isAuth? <HomePage/> : <Redirect to="/"/>}
                </Route>
                <Route path="/foto-details/:imageId">
                    <FotoDetails/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="/my-pixam">
                    <MyPixam/>
                </Route>
            </Switch>

    );
}

export default App;
