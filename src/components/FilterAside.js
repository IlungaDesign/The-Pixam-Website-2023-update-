import React from 'react';
import './FilterAside.css';
import {Link} from "react-router-dom";

function FilterAside () {
    return (
        <div className="container-filter">
            <table>
                <tr>
                    <th colSpan="2"><h1>Selecteer een thema</h1></th>
                </tr>

                <tr>
                    <td>
                        <Link to="/" className="icon-filter" >
                            <i className="fa-solid fa-business-time fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link to="/" className="btn-hover-filter" >
                            Business
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="/" className="icon-filter" >
                            <i className="fa-solid fa-music fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link to="/" className="btn-hover-filter" >
                            Muziek
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="/" className="icon-filter">
                            <i className="fa-solid fa-user-tie fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link to="/" className="btn-hover-filter" >
                            Fashion
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="/" className="icon-filter">
                            <i className="fa-solid fa-umbrella-beach fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link to="/" className="btn-hover-filter" >
                            Vakantie
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="/" className="icon-filter">
                           <i className="fa-solid fa-briefcase-medical fa-2x"></i>
                       </Link>
                    </td>
                    <td>
                        <Link to="/" className="btn-hover-filter" >
                            Zorg
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="/" className="icon-filter">
                            <i className="fa-solid fa-palette fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link to="/" className="btn-hover-filter" >
                            Kunst
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="/" className="icon-filter">
                            <i className="fa-solid fa-person-running fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link to="/" className="btn-hover-filter" >
                            Sport
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="/" className="icon-filter">
                            <i className="fa-solid fa-person-rifle fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link to="/" className="btn-hover-filter" >
                            Oorlogen
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="/" className="icon-filter">
                            <i className="fa-solid fa-microchip fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link to="/" className="btn-hover-filter" >
                            Technologie
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="/" className="icon-filter">
                            <i className="fa-solid fa-dog fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link to="/" className="btn-hover-filter" >
                            Dieren
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="/" className="icon-filter">
                            <i className="fa-solid fa-car fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link to="/" className="btn-hover-filter" >
                            Auto
                        </Link></td>
                </tr>

                <tr>
                    <td>
                        <Link to="/" className="icon-filter">
                            <i className="fa-solid fa-children fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link to="/" className="btn-hover-filter" >
                            Cartoon
                        </Link>
                    </td>
                </tr>
            </table>
        </div>

    );
}

export default FilterAside;