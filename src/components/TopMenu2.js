import React from 'react';
import logo from '../assets/pixam_logo9.png';
import {NavLink} from 'react-router-dom';
import './TopMenu2.css';

function TopMenu2 () {
    return (

        <header className="nav-header2">
            <nav>
                <div className="container-nav">
                    <NavLink to="/"><img src={logo} alt="logo-pixam" className="logo-pixam"/></NavLink>

                    <input type='checkbox' id='check'/>
                    <label for='check' className='checkbtn'><i className="fa-solid fa-bars"></i></label>

                    <ul >
                        <li>
                            <NavLink  to="/" exact className="hover-menu">Afbeeldingen</NavLink>
                        </li>

                        <li>
                            <NavLink  to="/over-ons" className="hover-menu"> Over ons</NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact" className="hover-menu">Contact</NavLink>
                        </li>

                        <li>
                            <NavLink  to="/login" className="hover-menu">Login</NavLink>
                        </li>

                        <li>
                            <NavLink  to="/my-pixam" className="hover-menu" id='link-my-pixam'>My Pixam</NavLink>
                        </li>
                    </ul>

                    {/*--------------we create here the menu for the small icon-------------------------------------------*/}

                </div>

            </nav>
        </header>

    );
}

export default TopMenu2 ;

