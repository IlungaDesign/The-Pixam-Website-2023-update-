import React from 'react';
import logo from '../assets/pixam_logo9.png';
import {Link, NavLink} from 'react-router-dom';
import './TopMenu.css';

const navLinkStyles = ( {isActive} ) => {
    return {
        color:isActive? '#02be6e' : 'normal',
        textDecoration: isActive ? 'none' : 'none',
    }

}

function TopMenu () {
    return (
        <header className="app-header">
            <nav>
                <div className="container-nav">
                    <NavLink to="/"><img src={logo} alt="logo-pixam" className="logo-pixam"/></NavLink>

                    <ul >
                        <li>
                            <NavLink style={navLinkStyles}  to="/" exact className="hover-menu" >Afbeeldingen</NavLink>
                        </li>

                        <li>
                            <NavLink style={navLinkStyles} to="/over-ons" className="hover-menu"> Over ons</NavLink>
                        </li>

                        <li>
                            <NavLink style={navLinkStyles} to="/contact" className="hover-menu">Contact</NavLink>
                        </li>

                        <li>
                            <NavLink style={navLinkStyles} to="/login" className="hover-menu">Login</NavLink>
                        </li>

                        <li>
                            <NavLink style={navLinkStyles} to="/login" className="hover-menu" id='link-my-pixam'>My Pixam</NavLink>
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

