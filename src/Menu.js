import React from 'react';
import styles from './appStyles.module.css';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Menu extends React.Component{
render(){
    return(
        <Nav  className="flex-column" >
                  <Link to="/" className={styles.brdr} style={{ textDecoration: 'none' }}>HOME</Link>
                  <Link to="/About" className={styles.brdr} style={{ textDecoration: 'none' }}>ABOUT</Link>
                  <Link to="/Contact" className={styles.brdr} style={{ textDecoration: 'none' }}>ASAL USUL</Link>
        </Nav>
    )
}
}

export default Menu;