import React from 'react';
import styles from './index.css';
import Header from './header';
import Footer from './footer';
import 'bulma/css/bulma.css'
const BasicLayout: React.FC = props => {


  return (



    <div>
      <div className={styles["black-color-bg"]}>
        <Header />
      </div>
      <div className="container p-4">
        {props.children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BasicLayout;
