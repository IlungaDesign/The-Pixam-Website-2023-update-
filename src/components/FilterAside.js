import React from 'react';
import './FilterAside.css';

function FilterAside () {
    return (
        <div className="container-filter">
            <table>
                <tr>
                    <th colSpan="2"><h1>Selecteer een thema</h1></th>
                </tr>

                <tr>
                    <td><a href="https://youtube.com" className="icon-filter"><i className="fa-solid fa-business-time fa-2x"></i></a></td>
                    <td><a href="https://youtube.com" className="btn-hover-filter">Business</a></td>
                </tr>

                <tr>
                    <td><a href="https://youtube.com" className="icon-filter"><i className="fa-solid fa-music fa-2x"></i></a></td>
                    <td><a href="https://youtube.com" className="btn-hover-filter">Muziek</a></td>
                </tr>

                <tr>
                    <td><a href="https://youtube.com" className="icon-filter"><i className="fa-solid fa-user-tie fa-2x"></i></a></td>
                    <td><a href="https://youtube.com" className="btn-hover-filter">Fashion</a></td>
                </tr>

                <tr>
                    <td><a href="https://youtube.com" className="icon-filter"><i className="fa-solid fa-umbrella-beach fa-2x"></i></a></td>
                    <td><a href="https://youtube.com" className="btn-hover-filter">Vakantie</a></td>
                </tr>

                <tr>
                    <td><a href="https://youtube.com" className="icon-filter"><i className="fa-solid fa-briefcase-medical fa-2x"></i></a></td>
                    <td><a href="https://youtube.com" className="btn-hover-filter">Zorg</a></td>
                </tr>

                <tr>
                    <td><a href="https://youtube.com" className="icon-filter"><i className="fa-solid fa-palette fa-2x"></i></a></td>
                    <td><a href="https://youtube.com" className="btn-hover-filter">Kunst</a></td>
                </tr>

                <tr>
                    <td><a href="https://youtube.com" className="icon-filter"><i className="fa-solid fa-person-running fa-2x"></i></a></td>
                    <td><a href="https://youtube.com" className="btn-hover-filter">Sport</a></td>
                </tr>

                <tr>
                    <td><a href="https://youtube.com" className="icon-filter"><i className="fa-solid fa-person-rifle fa-2x"></i></a></td>
                    <td><a href="https://youtube.com" className="btn-hover-filter">Oorlogen</a></td>
                </tr>

                <tr>
                    <td><a href="https://youtube.com" className="icon-filter"><i className="fa-solid fa-microchip fa-2x"></i></a></td>
                    <td><a href="https://youtube.com" className="btn-hover-filter">Technologie</a></td>
                </tr>

                <tr>
                    <td><a href="https://youtube.com" className="icon-filter"><i className="fa-solid fa-dog fa-2x"></i></a></td>
                    <td><a href="https://youtube.com" className="btn-hover-filter">Dieren</a></td>
                </tr>

                <tr>
                    <td><a href="https://youtube.com" className="icon-filter"><i className="fa-solid fa-car fa-2x"></i></a></td>
                    <td><a href="https://youtube.com" className="btn-hover-filter">Auto</a></td>
                </tr>

                <tr>
                    <td><a href="https://youtube.com" className="icon-filter"><i className="fa-solid fa-children fa-2x"></i></a></td>
                    <td><a href="https://youtube.com" className="btn-hover-filter">Cartoon</a></td>
                </tr>
            </table>
        </div>

    );
}

export default FilterAside;