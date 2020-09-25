import React from 'react';
import styles from './appStyles.module.css';
import astana from './astana-geude.jpg';


class Astana extends React.Component{
    render(){
        return(
            <div className={styles.div_curug}>
                 <center><h2 className={styles.h2}>Astana Geude Kawali</h2></center>
                 <center><img src={astana} alt=""></img></center>
                 <p className={styles.huruf_curug}>
                    Situs Astana Gede Kawali terletak di Dusun Indrayasa, Kecamatan Kawali, sekitar 21 kilometer ke utara dari Kota Ciamis.
                    Situs ini memiliki luas sekitar 5 ha. Berada di kaki Gunung Sawal, bentang alamnya dikelilingi oleh pepohonan 
                    yang rimbun dan tinggi sehingga memberikan hawa yang sejuk dan aura mistis yang kental.
                    Di sebelah Selatan dibatasi oleh Sungai Cibulan yang mengalir dari Barat ke Timur.
                    Di sebelah Timur berupa parit kecil dari sungai Cimuntur yang mengalir dari Utara ke Selatan.Di sebelah Utara, mengalir Sungai Cikadongdong dan sebelah Barat dibatasi oleh Sungai Cigarunggang.<br/>
                    Keadaan lingkungan situs ini merupakan hutan lindung yang ditumbuhi dengan berbagai jenis tumbuhan, tanaman keras dari famili meliceae,
                    lacocarpaceae, euphorbiaceae, sapidanceae dan lain-lain, tanaman palawija, rotan, salak, cengkih dll.
                    Di Situs Astana Gede Kawali terdapat banyak peninggalan arkeologi, seperti batu prasasti, batu menhir, dan makam.
                 </p>
                 <p className={styles.huruf_curug}>
                    Konon situs dinamakan Astana Gede karena terdapat sebuah makam yang ukurannya besar, panjang sekali dan berbeda dengan makam-makam lain pada umumnya. 
                    Dalam bahasa Sunda, astana berarti makam dan gede berarti besar.<br/>
                    Namun ada juga yang berpendapat karena Situs Astana Gede merupakan tempat dimakamkannya orang-orang besar, atau dalam 
                    bahasa Sunda disebut gegeden. Makam tersebut diduga adalah makam Pangeran Usman, yang memerintah pada 1592 – 1643 M. 
                    Beliau sudah memeluk agama Islam yang merupakan keturunan dari Kesultanan Cirebon.<br/>
                    Dilihat dari tinggalan budaya yang ada, Astana Gede Kawali merupakan kawasan campuran. Yaitu berasal dari periode prasejarah, klasik dan periode Islam.
                    Bentuk budaya dari tradisi megalitik ditandai dengan adanya temuan punden berundak, lumpang batu, menhir, 
                    yoni kemudian berlanjut secara berangsur-angsur ke tradisi budaya sejarah (klasik) yang ditandai dengan adanya prasasti, 
                    kemudian berlanjut ke tradisi Islam yang ditandai dengan adanya makam kuna.  
                 </p>
                 <p className={styles.huruf_curug}>
                     Situs ini juga merupakan obyek ilmu pengetahuan. Banyak tinggalan budaya masa lampau yang sudah diteliti oleh para ilmuwan seperti
                     ahli arkeologi, ahli filologi sejarawan dsb.Mereka datang untuk meneliti mulai dari jenis batu-batuan, tulisan dan bahasanya, atau temuan-temuan lain yang berhasil digali terutama oleh para ahli arkeologi.
                     Penelitian di Astana Gede mulai dilakukan pada zaman Belanda, tetapi lebih menitikberatkan pada prasasti.<br/>
                     Orang Eropa yang pertama kali tertarik pada prasasti di Situs Kawali ini adalah Thomas Stamford Raffles (1811-1816), terbukti dia menyebut-nyebutnya dalam dalam bukunya History of Java.
                     Namun, prasasti itu baru dibaca secara serius oleh Friederich pada tahun 1855.
                 </p>
            </div>
        )
    }
}
export default Astana;