import React from 'react';
import styles from './appStyles.module.css';
import kuta from './kampung.jpg';

class Kampung extends React.Component{
    render(){
        return(
            <div className={styles.div_curug}>
                <center><h2>Kampung Adat Kuta</h2></center>
                <center><img src={kuta} alt=""></img></center>
                <p className={styles.huruf_curug}>
                    Kampung Kuta Tambaksari Ciamis, Jawa Barat yakni satu buah dusun adat yang hingga sekarang ini tetap teguh memegang budaya adat leluhurnya.
                    Komunitas ini berada di Desa Karangpaninggal Kecamatan Tambaksari, sekitar 60 Kilometer dari Kota Ciamis ke arah timur.
                    <br/>
                    Kampung Kuta terdiri atas 2 RW dan 4 RT. Kampung ini berbatasan denga Dsn. Cibodas disebelah utara, Dusun Margamulya
                    di sebelah barat, dan di sebelah selatan dan timur bersama Sungai Cijulang, yang sekaligus perbatasan antara Jawa Barat dan Jawa Tengah.
                    Nama Kampung Kuta ini diberikan karena cocok dengan tempat Kampung Kuta yang berada di lembah
                    yang curam, kurang lebih 75 meter, dan dikelilingi oleh tebing-tebing/perbukitan. Dalam bahasa Sunda buhun,Kuta artinya pagar tembok.
                    Ada sekian banyak cerita tentang asal usul Kampung Kebiasaan Kuta. Masyarakat setempat yakin, peristiwa Kampung Kuta berkenaan dengan pendirian kerajaan Galuh. 
                    Kampung Kuta konon awalnya dipersiapkan sebagai ibukota kerajaan Galuh, tetapi tak menjadi.

                </p>
                <p className={styles.huruf_curug}>
                    Di Kampung Kuta, kita bisa melihat orang-orang hidup dengan cara tradisional dan jauh berbeda dibandingkan kehidupan perkotaan dan modern.
                    Hal pertama yang bisa kita lihat dari warga Kampung Kuta adalah prinsip hidup mereka yang selalu dipatuhi,
                    yaitu sistem mata pencaharian, bangunan rumah, bahasa, dan keyakinan.<br/>
                    Menurut Ketua Adat Kampung Kuta, pekerjaan masyarakat di sana adalah berkebun, bertani, dan beternak.
                    Masyarakat juga sangat melestarikan hutan, mata air, dan pohon aren untuk sumber kehidupan mereka.Keunikan lain adalah adanya hutan keramat. Orang-orang biasanya datang ke hutan keramat untuk meminta keselamatan dan kebahagiaan.
                    Namun, mereka tidak boleh meminta kekayaan karena itu melambangkan ketamakan.<br/>
                    Seperti dilansir Viva ketika masuk hutan keramat, orang tidak boleh merusak hutan, dilarang pakai baju dinas, perhiasan emas,
                    baju hitam-hitam, tidak boleh membawa tas, tidak boleh pakai alas kaki, tidak boleh meludah, dan dilarang membuat gaduh.
                    Meski hidup dengan banyak aturan, bukan berarti mereka tak punya hiburan.  Di sana, kita bisa melihat berbagai kesenian yang masih sering dipentaskan oleh warga setempat. 
                    Keseniannya antara lain calung, reog, sandiwara, tagoni, kliningan, jaipongan, kasidah, ronggeng, dan musik dangdut.
                        
                </p>
            </div>
        )
    }
}
export default Kampung;