import React from 'react';

const LandingTiles = (props: any) => {
    return (
        <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
                <div className="tile">
                    <div className="tile is-parent is-vertical">
                        <article className="tile is-child notification is-primary">
                            <p className="title">Welcome</p>
                            <p className="subtitle">Git Hub API integration</p>
                        </article>
                        <article className="tile is-child notification is-warning">
                            <p className="title"></p>
                            <p className="subtitle">You will see git hub user list</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-info">
                            <p className="title">This is a simulation</p>
                            <p className="subtitle">for a landing page</p>
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-danger">
                        <p className="title">List With basic functions</p>
                        
                        <div className="content">
                        </div>
                    </article>
                </div>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                    <div className="content">
                        {/* <p className="title">Tall tile</p> */}
                        <p className="subtitle">Search</p>
                        <p className="subtitle">Filter</p>
                        <p className="subtitle">Next function</p>
                        <p className="subtitle">Previus function</p>
                        <p className="subtitle">My personal LinkedLn</p>
                        <p className="subtitle">Nav Bar</p>
                        <p className="subtitle">Navigation between home, user list, and repo list</p>
                        <div className="content">
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};


export default LandingTiles;