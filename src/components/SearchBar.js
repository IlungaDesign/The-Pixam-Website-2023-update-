import React from 'react';
import './SearchBar.css';
// import logo from '../assets/pixam_logo9.png';

function SearchBar () {
    return (
        <section className="section-searchbar">
            <div className="container-searchbar">
                <form className="form-search" action="#">
                    <button type="submit" className="button-search">
                        <i className="fa fa-search"></i>
                    </button>

                    <input type="text"
                           placeholder="     Zoek op trefwoord.."
                           name="search"/>
                </form>
            </div>
            <button type="submit" className="button-search-2">Zoeken</button>
        </section>

    );
}

export default SearchBar;