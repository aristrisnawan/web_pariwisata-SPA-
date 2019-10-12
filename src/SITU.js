import React from 'react';
import styles from './appStyles.module.css';
import situ from './situ.jpg';

class SITU extends React.Component{
    render(){
        return(
            <div className={styles.div_curug}>
                    <center><h2>Situ Lengkong Panjalu</h2></center>
                    <center><img src={situ} alt=""></img></center>
                    <p className={styles.huruf_curug}>
                        Situ lengkong Panjalu adalah suatu danau (situ dalam bahasa Sunda) yang terletak di Kecamatan Panjalu, Ciamis, Jawa Barat.
                        Situ Lengkong ditetapkan sebagai cagar alam (Natuurmonument) berdasarkan Surat Keputusan Gubernur Jenderal Hindia Belanda
                        (Besluit van den Gouverneur-Generaal van Nederlandsch Indie) Nomor 6 pada tanggal 21 Februari 1919.
                    </p>
                    <p className={styles.huruf_curug}>
                        Konon, di kawasan Situ Lengkong itulah dahulunya menjadi pusat pemerintahan Kerajaan Panjalu Ciamis.
                        Dengan adanya penermuan-penemuan sejarah itu,maka Panjalu berkembang sebagai kota daerah wisata, baik wisata alam, wisata budaya 
                        maupun sebagai wisata ziarah. Pentingnya daerah Panjalu sebagai cikal bakal kerajaan Sunda Kawali, maka Pemerintah 
                        Provinsi Jawa Barat, pada tanggal 17 Maret tahun 2004 mengukuhkan panjalu sebagai desa wisata.<br/>
                        Situ Lengkong terletak sekitar 35 km sebelah utara kota Kabupaten Ciamis atau 15 km sebelah barat Kota Kawali, berbatasan di sebelah utara dengan wilayah talaga Kabupaten Majalengka dan Kabupaten Kuningan,
                        suatu lingkup wilayah komunitas yang dulu dikenal sebagai pusat kerajaan Panjalu.Temuan-temuan data kepurbakalaan,
                        nilai- nilai sosial kultural serta jejak kesejahteraan lainnya yang kini masih terlestarikan,
                        memberikan petunjuk tentang masa lalu kota itu. Sebagai kota kerajaan kuno yang dikenal sebagai kerajaan Soko Galuh Panjalu.
                        Ibu kota Kerajaan itu dibangun pada areal suatu danau (situ) seluas 70 Ha, yang kini disebut Situ Lengkong,
                        terletak disepanjang tepi utara kota Panjalu, sekarang terdapat tiga buah Nusa (pulau kecil).
                        Pada situ tersebut yang masing- masing digunakan sebagai tempat bangunan Istana Kerajaan, Kepatihan dan staf kerajaan dan sebagai taman rekreasi.
                        Pendiri ibu kota kerajaan adalah tokoh karismatik leluhur Panjalu bernama Borosngora Raja Panjalu islam pertama.
                    </p>
                    <p className={styles.huruf_curug}>
                        Wisatawan yang datang ke Panjalu pada umumnya adalah para penziarah mengunjungi Tokoh Raja Panjalu, teristimewa pemakaman
                        Prabu Harian Kancana di Nusa Situ Lengkong (Situ Istana Kerajaan) serta danau itu sendiri yang bernuansa religius,
                        disamping itu juga mengunjungi Musium Bumi Alit.Di mana disimpan benda- benda peninggalan bersejarah seperti Menhir, Batu Pengsucian, Batu Penobatan, 
                        naskah- naskah dan benda- benda pekakas peninggalan milik Raja-raja dan Bupati Panjalu masa lalu, terutama perkakas yang
                        disebut benda pusaka Panjalu yang berupa Pedang, Cis dan Genta (lonceng kecil) peninggalan Prabu Sanghyang Borosngora. (<i>Wikipedia bahasa Indonesia</i>)
                    </p>
            </div>
        )
    }
}
export default SITU;