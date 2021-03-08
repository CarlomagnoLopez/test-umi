import React from 'react';
import 'bulma/css/bulma.css'
const CardItem = (props: any) => {

    const { user } = props;
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={user.avatar_url} alt={user.login} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                           User Name: <strong>{user.login}</strong>
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <a className="button is-primary" href={user.html_url} target="_blank"> Visit Profile</a>
                    </nav>
                </div>
            </article>
        </div>
    );
};


export default CardItem;