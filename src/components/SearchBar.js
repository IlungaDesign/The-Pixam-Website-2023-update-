import React from 'react';
import './SearchBar.css';
import axios from 'axios'
import {get} from "react-hook-form";

function SearchBar ({endPoint, setEndPoint, query, setQuery}) {

    // async function getData(){
    //     try{
    //         const result = await axios.get('https://api.unsplash.com/search/photos?page=1&query=utrecht&client_id=3sZuQtQVCljncB-BTL7BmeRQGDybQmsP28B4dOybwko')
    //         console.log(result.data.results)
    //     }catch (e) {
    //
    //     }
    //     console.log('response');
    // }
    // getData()

    function clickhandler(e) {
        // e.preventDefault()

        console.log(e.target.value)

            setQuery(`https://api.unsplash.com/search/photos?page=1&query=${e.target.value}&client_id=3sZuQtQVCljncB-BTL7BmeRQGDybQmsP28B4dOybwko`)
            setEndPoint(query)

    }

    return (
        <section className="section-searchbar">
            <div className="container-searchbar">
                <form className="form-search" action="#">
                    <button type="submit" className="button-search"
                    >
                        <i className="fa fa-search"></i>
                    </button>

                    <input type="text"
                           placeholder="     Zoek op trefwoord.."
                           name="search"
                           onChange={clickhandler}
                    />
                </form>
            </div>
            <button type="button" className="button-search-2"
                    // onClick={clickhandler}
                >
                Zoeken
            </button>
        </section>

    );
}

export default SearchBar;