import React from 'react';
import styles from './appStyles.module.css';
class ABOUT extends React.Component{
    render(){
        return(
            <div className={styles.ciamis_div}>
                <center><h3 className={styles.judul}>Kabupaten Ciamis</h3></center>
                <p className={styles.ciamis}>
                    Kabupaten Ciamis  adalah sebuah kabupaten di Provinsi Jawa Barat, Indonesia. Ibu kotanya adalah Ciamis Kota.
                    Kabupaten ini berada di bagian tenggara Jawa Barat, berbatasan dengan Kabupaten Majalengka dan Kabupaten Kuningan di utara, Kabupaten Cilacap (Jawa Tengah) 
                    dan Kota Banjar di timur, Kabupaten Pangandaran di selatan, serta Kota Tasikmalaya dan Kabupaten Tasikmalaya di barat.
                    <br/>
                    Kabupaten Ciamis terdiri atas 27 kecamatan, yang dibagi lagi atas sejumlah desa dan kelurahan. Pusat pemerintahan di Kecamatan Ciamis. 
                </p>
                <p className={styles.ciamis}>
                Kecamatan Banjar, yang dulunya bagian dari Kabupaten Ciamis, ditingkatkan statusnya menjadi kota administratif, dan sejak tanggal 11 Desember 2002 ditetapkan menjadi kota (otonom),
                yang terpisah dari Kabupaten Ciamis. Selain itu, bagian selatan Kabupaten Ciamis mengalami pemekaran pada tanggal 25 Oktober 2012 menjadi Kabupaten Pangandaran yang memiliki 10 <strong>Kecamatan.</strong>
                </p>
            </div>
            
        )
    }
}

export default ABOUT;