import React from 'react';
import styles from './appStyles.module.css';

class Head extends React.Component{
    render(){
        return(
            <div>
                <header className={styles.head}>
                    <p className={styles.font}>Welcome To Ciamis Pariwisata</p>
                </header>
            </div>
        )
    }
}

export default Head;