import React from 'react';
import {Link} from 'react-router-dom';
import {Card,Button,Row,Col,CardTitle,CardText} from 'reactstrap';
import curug from './curug-tujuh.jpg';
import situ from './situ.jpg';
import astana from './astana-geude.jpg';
import kuta from './kampung.jpg';
import ciung from './ciung.jpg';
import batu from './batu.jpg';
import styles from './appStyles.module.css';

// import {BrowserRouter} from 'react-router-dom';
class HOME extends React.Component{
    render(){
        return(
            <div>

            <Row >
                <Col sm="3" className={styles.info}>
                    <Card body className={styles.kartu}>
                    <img width="100%" src={curug} height="145vh" alt=""/>
                    <CardTitle><center><b>Curug 7 Panajalu</b></center></CardTitle>
                    <CardText>Curug tujuh Panjalu atau sering disebut juga curug Cibolang . . .</CardText>
                    <Link to="/Curug"><Button color="success">Learn More</Button></Link>
                    
                    </Card>
                </Col>
                <Col sm="3" className={styles.info}>
                    <Card body className={styles.kartu}>
                    <img width="100%" src={situ} height="145vh" alt=""/>
                    <CardTitle><center><b>Situ Lengkong Panjalu</b></center></CardTitle>
                    <CardText>Situ lengkong Panjalu adalah suatu danau (situ dalam bahasa Sunda). . .</CardText>
                    <Link to="/Situ"><Button color="success">Learn More</Button></Link>
                    </Card>
                </Col>
                <Col sm="3" className={styles.info}>
                    <Card body className={styles.kartu}>
                    <img width="100%" src={astana} height="145vh"  alt=""/>
                    <CardTitle><center><b>Astana Geude Kawali</b></center></CardTitle>
                    <CardText>Situs Astana Gede Kawali terletak di Dusun Indrayasa, Kecamatan...</CardText>
                    <Link to="/Astana"><Button color="success">Learn More</Button></Link>
                    </Card>
                </Col>
                <Col sm="3" className={styles.info}>
                    <Card body className={styles.kartu}>
                    <img width="100%" src={kuta} height="145vh" alt=""/>
                    <CardTitle><center><b>Kampung Adat Kuta</b></center></CardTitle>
                    <CardText>Kampung Kuta Tambaksari Ciamis, Jawa Barat yakni satu buah . . .</CardText>
                    <Link to="/Kuta"><Button color="success">Learn More</Button></Link>
                    </Card>
                </Col>
                <Col sm="3" className={styles.info}>
                    <Card body className={styles.kartu}>
                    <img width="100%" src={ciung} height="145vh" alt=""/>
                    <CardTitle><center><b>Ciung Wanara</b></center></CardTitle>
                    <CardText>Objek wisata di tepi Jalan raya Ciamis-Banjar itu adalah . . .</CardText>
                    <Link to="/Ciung"><Button color="success">Learn More</Button></Link>
                    </Card>
                </Col>
                <Col sm="3" className={styles.info}>
                    <Card body className={styles.kartu}>
                    <img width="100%" src={batu} height="145vh" alt=""/>
                    <CardTitle><center><b>Batu Ngampar</b></center></CardTitle>
                    <CardText>Obyek Wisata Wisata Batu Ngampar di Panumbangan Ciamis Jawa Barat...</CardText>
                    <Link to="/Batu"><Button color="success">Learn More</Button></Link>
                    </Card>
                </Col>
            </Row>
                
                
            </div>
        )
    }
}

export default HOME;