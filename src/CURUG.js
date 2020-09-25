import React from 'react';
import styles from './appStyles.module.css'; 
import curug from './curug-tujuh.jpg';
class CURUG extends React.Component{
    render(){
        return(
            <div className={styles.div_curug}>
                <center><h2 className={styles.h2}>Curug 7 Panjalu</h2></center>
                
                    <center><img src={curug} alt="" className={styles.gmbr_curug}></img></center><br/>
                <p className={styles.huruf_curug}>
                    Curug tujuh Panjalu atau sering disebut juga curug Cibolang terletak di desa Sandingtaman,
                     Kecamatan Panjalu,di kaki Gunung Syawal. Berjarak Sekitar 35 Km dari kota Ciamis ke arah utara.<br/>
                </p>
                <p className={styles.huruf_curug}>
                    Menurut legenda,curug tujuh terbentuk dari mata air seorang raja. Konon, pada zaman dahulu terjadi kemarau
                    yang sangat panjang di wilayah ini, sehingga rakyatnya dirundung malang berkepanjangan.<br/> 
                    Hal ini membuat raja yang berkuasa sangat prihatin. Ia kemudian bertapa untuk memohon supaya diturunkan hujan
                    agar keadaan negerinya pulih seperti sediakala.<br/>
                    Namun usahanya itu tidak juga mendapatkan jawaban dari Yang Kuasa. 
                    Sang raja pun semakin sedih, hingga menangis.<br/>
                    Namun keajaiban terjadi. Air mata sang raja perlahan berubah menjadi genangan air dan semakin lama semakin membesar 
                    sehingga membentuk aliran yang akhirnya terpecah dan jatuh di tujuh buah tebing. Maka terbentuklah curug tujuh.
                </p>
                <p className={styles.huruf_curug}>
                Obyek wisata Curug Tujuh cocok bagi yang mempunyai hobi petualangan.  
                Hal ini disebabkan untuk menuju ke lokasi itu dibutuhkan cukup kerja keras mendaki bukit.<br/>
                Namun, panorama alam yang indah dan suasana hutan pinus dan alam gunung Ciparang dan gunung Cibolang yang melingkupinya memberikan kompensasi yang sepadan.
                Daya tarik utama dari obyek wisata ini adalah ketujuh curugnya.  Konon di antara curug tersebut mengalirkan air yang berkhasiat menyembuhkan penyakit seperti
                penyakit kulit, encok, rematik dan pegal linu.Istimewanya, airnya tidak pernah surut sekalipun musim kemarau.

                </p>
            </div>
        )
    }
}

export default CURUG;