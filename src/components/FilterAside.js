import React from 'react';
import './FilterAside.css';
import {Link} from "react-router-dom";
// import {set} from "react-hook-form";

function FilterAside ({setEndPoint}) {

    function click(query) {
        setEndPoint(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=3sZuQtQVCljncB-BTL7BmeRQGDybQmsP28B4dOybwko`)
    }

    return (
        <div className="container-filter">
            <table>
                <tr>
                    <th colSpan="2"><h1>Selecteer een thema</h1></th>
                </tr>

                <tr>
                    <td>
                        <Link className="icon-filter"
                              onClick={()=> click('music')}>
                            <i className="fa-solid fa-music fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link
                            onClick={()=> click('music')}
                            className="btn-hover-filter" >
                            Muziek
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link className="icon-filter"
                              onClick={()=> click('Business')}>
                            <i className="fa-solid fa-business-time fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link className="btn-hover-filter"
                              onClick={()=> click('Business')}>
                            Business
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="#" className="icon-filter"
                              onClick={()=> click('Fashion')}>
                            <i className="fa-solid fa-user-tie fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link className="btn-hover-filter"
                              onClick={()=> click('Fashion')}>
                            Fashion
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="#" className="icon-filter"
                              onClick={()=> click('Vakantie')}>
                            <i className="fa-solid fa-umbrella-beach fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link className="btn-hover-filter"
                              onClick={()=> click('Vakantie')}>
                            Vakantie
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="#" className="icon-filter"
                              onClick={()=> click('Care')}>
                           <i className="fa-solid fa-briefcase-medical fa-2x"></i>
                       </Link>
                    </td>
                    <td>
                        <Link className="btn-hover-filter"
                              onClick={()=> click('Care')}>
                            Zorg
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="#" className="icon-filter"
                              onClick={()=> click('Kunst')}>
                            <i className="fa-solid fa-palette fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link className="btn-hover-filter"
                              onClick={()=> click('Kunst')}>
                            Kunst
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="#" className="icon-filter"
                              onClick={()=> click('Sport')}>
                            <i className="fa-solid fa-person-running fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link className="btn-hover-filter"
                              onClick={()=> click('Sport')}>
                            Sport
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="#" className="icon-filter"
                              onClick={()=> click('War')}>
                            <i className="fa-solid fa-person-rifle fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link className="btn-hover-filter"
                              onClick={()=> click('War')}>
                            Oorlogen
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="#" className="icon-filter"
                              onClick={()=> click('Technologie')}>
                            <i className="fa-solid fa-microchip fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link to="#" className="btn-hover-filter"
                              onClick={()=> click('Technologie')}>
                            Technologie
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="/" className="icon-filter"
                              onClick={()=> click('Dieren')}>
                            <i className="fa-solid fa-dog fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link className="btn-hover-filter"
                              onClick={()=> click('Dieren')}>
                            Dieren
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Link to="/" className="icon-filter"
                              onClick={()=> click('Auto')}>
                            <i className="fa-solid fa-car fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link className="btn-hover-filter"
                              onClick={()=> click('Auto')}>
                            Auto
                        </Link></td>
                </tr>

                <tr>
                    <td>
                        <Link to="/" className="icon-filter"
                              onClick={()=> click('Cartoon')}>
                            <i className="fa-solid fa-children fa-2x"></i>
                        </Link>
                    </td>
                    <td>
                        <Link className="btn-hover-filter"
                              onClick={()=> click('Cartoon')}>
                            Cartoon
                        </Link>
                    </td>
                </tr>
            </table>
        </div>

    );
}

export default FilterAside;