import React from 'react';
import styles from './appStyles.module.css';
import batu from './batu.jpg';

class Batu extends  React.Component{
    render(){
        return(
            <div className={styles.div_curug}>
                <center><h2 className={styles.h2}>Batu Ngampar</h2></center>
                <center><img src={batu} alt=""></img></center>
                <p className={styles.huruf_curug}>
                 Obyek Wisata Wisata Batu Ngampar di Panumbangan Ciamis Jawa Barat adalah salah satu tempat wisata yang berada
                 di desa medanglayang, kabupaten ciamis, provinsi jawa barat,  negara Indonesia.<br/>
                 Lokasinya berada di ketinggian bagian dari kaki Gunung Syawal. Tidak hanya Batu Ngampar saja, tetapi terdapat beberapa Curug kecil yang bisa di jadikan sebagai Objek Wisata. 
                 Objek Wisata Batu Ngampar bisa dijadikan Eco Wisata oleh Kabupaten Ciamis, 
                 Obyek Wisata Wisata Batu Ngampar di Panumbangan Ciamis Jawa Barat adalah tempat wisata yang ramai dengan wisatawan pada hari biasa maupun hari liburan.
                 Tempat ini sangat indah dan bisa memberikan sensasi yang berbeda dengan aktivitas kita sehari hari.
                 <br/>
                 Obyek Wisata Wisata Batu Ngampar di Panumbangan Ciamis Jawa Barat memiliki pesona keindahan yang sangat menarik untuk dikunjungi.
                 Sangat di sayangkan jika anda berada di kota ciamis tidak mengunjungi wisata alam  yang mempunyai keindahan  yang tiada duanya tersebut. 
                </p>
                <p className={styles.huruf_curug}>
                Obyek Wisata Wisata Batu Ngampar di Panumbangan Ciamis Jawa Barat sangat cocok untuk mengisi 
                kegiatan liburan anda, apalagi saat liburan panjang seperti libur nasional, ataupun hari ibur lainnya.  
                Keindahan Obyek Wisata Wisata Batu Ngampar di Panumbangan Ciamis Jawa Barat  ini sangatlah baik bagi anda semua yang berada di dekat  atau di kejauhan untuk merapat mengunjungi tempat  Obyek 
                Wisata Wisata Batu Ngampar di Panumbangan Ciamis Jawa Barat  di kota  ciamis.<br/>
                Obyek Wisata Wisata Batu Ngampar di Panumbangan Ciamis Jawa Barat ini sangat cocok bagi para 
                petualang dan juga para pecinta alam, karena keindahan Obyek Wisata Wisata Batu Ngampar di Panumbangan Ciamis Jawa Barat ini masih sangat alami dan masih asli keindahannya.
                
                </p>
                
            </div>
        )
    }
}

export default Batu;