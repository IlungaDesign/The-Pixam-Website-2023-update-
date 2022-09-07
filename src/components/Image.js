import React from 'react';
import './Image.css';

function Image (props) {

    return (

        <>
            <article className="images-details1">
                <img
                    src={props.urls.full}
                    alt={props.user.name}
                />

                <div>
                    <img
                        src={props.user.profile_image.large}
                        alt={props.user.name} loading="lazy"
                        className="profile-details"/>
                </div>

            </article>
        </>

    );
}

export default Image ;

