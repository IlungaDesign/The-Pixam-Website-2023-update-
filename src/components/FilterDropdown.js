import React from 'react';
import './FilterDropdown.css';
import {Link} from "react-router-dom";

function FilterDropdown () {
    return (
        <div className= "section-dropdown">

            <div className="dropdown">
                <button className="dropbtn">
                    <h>Selecteer een thema</h>
                    <h> <i className="fa-solid fa-caret-down"></i></h>
                </button>

                <div className="dropdown-content">

                    <Link to="/my-pixam" className="hover-mypixam">
                        <td><i className="fa-solid fa-business-time fa-1x"></i></td>
                        <td >Business</td>
                    </Link>

                    <Link to="/my-pixam" className="hover-mypixam">
                        <td><i className="fa-solid fa-music fa-1x"></i></td>
                        <td >Muziek</td>
                    </Link>

                    <Link to="/my-pixam" className="hover-mypixam">
                        <td><i className="fa-solid fa-user-tie fa-1x"></i></td>
                        <td >Fashion</td>
                    </Link>

                    <Link to="/my-pixam" className="hover-mypixam">
                        <td><i className="fa-solid fa-umbrella-beach fa-1x"></i></td>
                        <td >Vakantie</td>
                    </Link>

                    <Link to="/my-pixam" className="hover-mypixam">
                        <td><i className="fa-solid fa-briefcase-medical fa-1x"></i></td>
                        <td >Zorg</td>
                    </Link>

                    <Link to="/my-pixam" className="hover-mypixam">
                        <td><i className="fa-solid fa-palette fa-1x"></i></td>
                        <td >Kunst</td>
                    </Link>

                    <Link to="/my-pixam" className="hover-mypixam">
                        <td><i className="fa-solid fa-person-running fa-1x"></i></td>
                        <td >Sport</td>
                    </Link>

                    <Link to="/my-pixam" className="hover-mypixam">
                        <td><i className="fa-solid fa-person-rifle fa-1x"></i></td>
                        <td >Oorlogen</td>
                    </Link>

                    <Link to="/my-pixam" className="hover-mypixam">
                        <td><i className="fa-solid fa-microchip fa-1x"></i></td>
                        <td >Technologie</td>
                    </Link>

                    <Link to="/my-pixam" className="hover-mypixam">
                        <td><i className="fa-solid fa-dog fa-1x"></i></td>
                        <td >Dieren</td>
                    </Link>

                    <Link to="/my-pixam" className="hover-mypixam">
                        <td><i className="fa-solid fa-car fa-1x"></i></td>
                        <td >Auto</td>
                    </Link>

                    <Link to="/my-pixam" className="hover-mypixam">
                        <td><i className="fa-solid fa-children fa-1x"></i></td>
                        <td >Cartoon</td>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default FilterDropdown;