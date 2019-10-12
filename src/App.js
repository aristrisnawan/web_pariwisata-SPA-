import React from 'react';
import './App.css';
import styles from './appStyles.module.css';
import Header from './Head.js';
import Menu from './Menu';
import Footer from './Footer';
import HOME from './HOME.js';
import ABOUT from './ABOUT.js';
import CONTACT from './CONTACT';
import Curug from './CURUG';
import Situ from './SITU';
import Astana from './Astana';
import Kuta from './Kampung';
import Ciung from './Ciung';
import Batu from './Batu';
import {Row,Col} from 'react-bootstrap';
import {Route} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div className={styles.over}>
        <Header/>
        <Row className={styles.ukuran}>
            <Col xs={12} lg={2} className={styles.kolom_kiri}>
                <Menu/> 
            </Col>
            <Col xs={12} lg={10} className={styles.kolom_kanan}>
                    <div className={styles.route}>
                       <Route path="/" exact component={HOME}/>
                       <Route path="/About" exact component={ABOUT}/>
                       <Route path="/Contact" exact component={CONTACT}/>
                       <Route path="/Curug" exact component={Curug}/>
                       <Route path="/Situ" exact component={Situ}/>
                       <Route path="/Astana" exact component={Astana}/>
                       <Route path="/Kuta" exact component={Kuta}/>
                       <Route path="/Ciung" exact component={Ciung}/>
                       <Route path="/Batu" exact component={Batu}/>
                      {/* <Route component={ERORR}/> */}
                    </div>
            </Col>
        </Row>
        <Footer/>
      </div>
    )
  }
}
export default App;
