import React from 'react';
import './SearchBar.css';
import axios from 'axios'
import {get} from "react-hook-form";

function SearchBar () {

    async function getData(){
        try{
            const result = await axios.get('https://api.unsplash.com/search/photos?page=1&query=office&client_id=3sZuQtQVCljncB-BTL7BmeRQGDybQmsP28B4dOybwko')
            console.log(result.data.results)
        }catch (e) {

        }
    }
    getData()
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