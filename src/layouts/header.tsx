import React from 'react';
import styles from './index.css';
import 'bulma/css/bulma.css'
import { Link } from 'umi';

const Header: React.FC = (props) => {
    const [isActive, setisActive] = React.useState(false);
    return (
        <nav className="navbar is-black container" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://github.com/" target="_blank">
                    <figure className="image is-64x64">
                        <div className={styles.gitimg}></div>
                    </figure>
                </a>

                <a onClick={() => {
                    setisActive(!isActive);
                }} role="button" className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                    aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className="navbar-start">
                    <Link className="navbar-item" to="/">Home</Link>
                    <Link className="navbar-item" to="/users">Git User</Link>
                    <Link className="navbar-item" to="/repos">Git Org</Link>
                    <a className="navbar-item" href="https://www.linkedin.com/in/carlomagno-lopez-campos-331328120/" target="_blank">
                        Carlomagno LC
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-light" href="https://api.github.com" target="_blank">
                                API Github
                             </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;