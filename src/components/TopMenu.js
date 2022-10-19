import React, {useContext} from 'react';
import logo from '../assets/pixam_logo9.png';
import {Link, NavLink} from 'react-router-dom';
import './TopMenu.css';
import { AuthContext } from '../context/AuthContext';
import {useHistory} from "react-router-dom";

// const navLinkStyles = ( {isActive} ) => {
//     return {
//         color:isActive? '#02be6e' : 'normal',
//         textDecoration: isActive ? 'none' : 'none',
//     }
//
// }

function TopMenu () {
    const {logout, isAuth} = useContext(AuthContext)
    const history = useHistory();

    return (
        <header className="app-header">
            <nav>
                <div className="container-nav">
                    <NavLink to="/"><img src={logo} alt="logo-pixam" className="logo-pixam"/></NavLink>

                    <ul >
                        <li>
                            <NavLink  activeClassName="active-link" to="/home-page" exact className="hover-menu" >Afbeeldingen</NavLink>
                        </li>

                        {/*<li>*/}
                        {/*    <NavLink style={navLinkStyles} to="/over-ons" className="hover-menu"> Over ons</NavLink>*/}
                        {/*</li>*/}

                        <li>
                            <NavLink to="/contact" activeClassName="active-link" className="hover-menu">Contact</NavLink>
                        </li>

                        {isAuth ?
                            <button
                                type="button"
                                onClick={logout}
                                className="logout-button"
                            >
                                Uitloggen
                            </button>
                            :
                            <div>
                                <button
                                    type="button"
                                    onClick={() => history.push('/login')}
                                >
                                    Inloggen
                                </button>

                            </div>
                        }

                        <li>
                            <NavLink to="/login" className="hover-menu" id='link-my-pixam'>My Pixam</NavLink>
                        </li>
                    </ul>

                    <div className="container-my-Pixam">
                        <Link to="/my-pixam" className="hover-mypixam" ><i className="fa-solid fa-user fa-2x"></i></Link>

                        <Link to="/my-pixam" className="mypixam-link"><h>My Pixam</h></Link>
                    </div>

                    {/*--------------we create here the menu for the small icon-------------------------------------------*/}

                </div>

            </nav>
        </header>

    );
}

export default TopMenu;

