import React from 'react';
import styles from './appStyles.module.css';

class Footer extends React.Component{
    render(){
        return(
            <footer className={styles.footer}>
               <p className={styles.tulisan}> &copy;aristrisnawan</p>
            </footer>
        )
    }
}
export default Footer;