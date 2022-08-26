import React from 'react';
import './Footer.css';

function Footer () {
    return (

        <footer className="container-footer">
            <h>Volg ons op:</h>

            <div className="icons-footer">
                <ul className="icons-social-media">
                    <li><a href="https://youtube.com" rel="noopener noreferrer"><i className="fa-brands fa-youtube fa-1x"></i></a></li>
                    <li><a href="https://youtube.com" rel="noopener noreferrer"><i className="fa-brands fa-facebook fa-1x"></i></a></li>
                    <li><a href="https://youtube.com" rel="noopener noreferrer"><i className="fa-brands fa-twitter fa-1x"></i></a></li>
                    <li><a href="https://youtube.com" rel="noopener noreferrer"><i className="fa-brands fa-instagram-square fa-1x"></i></a></li>
                    <li><a href="https://youtube.com" rel="noopener noreferrer"><i className="fa-brands fa-snapchat-square fa-1x"></i></a></li>
                </ul>
            </div>

            <form className="form-footer">
                <input type="text" placeholder="Je email address" name="name" required/>
                <input type="submit" value="Subscribe" name="mail" required/>
            </form>

            <p>Ontvang informatie over nieuwe Pixam-diensten.</p>
            <p className="text-copyright">Copyright © 2022 by Pixam and Micheal Ilunga. All rights reserved.</p>
        </footer>

    );
}

export default Footer;