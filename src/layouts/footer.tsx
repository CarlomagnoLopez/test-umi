import React from 'react';
import styles from './index.css';
import 'bulma/css/bulma.css'

const Header: React.FC = (props) => {
    const [isActive, setisActive] = React.useState(false);
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>ZeBrands Assesment</strong> by Carlomagno Lopez Campos. It is an integrations test with UMIJS, DVAJS, BULMA and sREACTJS.
                </p>
            </div>
        </footer>
    );
};

export default Header;