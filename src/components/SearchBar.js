import React from 'react';
import './SearchBar.css';
// import axios from 'axios'
// import {get} from "react-hook-form";

function SearchBar ({setEndPoint}) {

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

    function onChange(e) {
        e.preventDefault()

        console.log(e.target.value)

            setEndPoint(`https://api.unsplash.com/search/photos?page=1&query=${e.target.value}&client_id=3sZuQtQVCljncB-BTL7BmeRQGDybQmsP28B4dOybwko`)

    }

    return (
        <section className="section-searchbar">
            <div className="container-searchbar">
                <form className="form-search" action="#"
                onSubmit={onChange}>
                    <button type="submit" className="button-search"
                    >
                        <i className="fa fa-search"></i>
                    </button>

                    <input type="text"
                           placeholder="     Zoek op trefwoord.."
                           name="search"
                           onChange={onChange}
                    />

                    <button type="submit" className="button-search-2"
                    >
                        Zoeken
                    </button>
                </form>
            </div>
        </section>

    );
}

export default SearchBar;