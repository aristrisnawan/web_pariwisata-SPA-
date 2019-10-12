import React from 'react';
import styles from './appStyles.module.css';
import ciung from './ciung.jpg';

class Ciung extends React.Component{
    render(){
        return(
            <div className={styles.div_curug}>
                <center><h2>Ciung Wanara</h2></center>
                <center><img src={ciung} alt=""></img></center>
                <p className={styles.huruf_curug}>
                Objek wisata di tepi Jalan raya Ciamis-Banjar itu adalah Objek Wisata Ciung Wanara Situs Bojong Galuh Karangkamulyaan.
                Situs ini memiliki kawasan hutan cagar budaya seluas 25 hektare yang terjaga kelestariannya. Pohon-pohon besar berumur ratusan tahun bisa ditemukan di tempat ini.
                <br/>
                Di bagian depan objek wisata ini terdapat Masjid Baitul Azis. Tak jauh dari situ,terdapat monumen Gong Perdamaian Dunia yang diresmikan pada 9 September 2009.
                Di samping monument Gong Perdamaian Dunia, berdiri pula Museum Situs Karangkamulyaan dengan koleksi berbagai jenis peninggalan Kerajaan Galuh.
                Di depan museum ini berdiri pohon dengan buahnya paling pahit, lebih pahit dari buah maja sekalipun.
                Bahkan kawanan monyet atau kera yang hidup dan berkembang biak di hutan cagar budaya Situs Karangkamulyan tersebut tak mau memakan buah pahit tersebut.
                Begitu menjejakkan kaki di dalam kawasan inti Situs Karangkamulyan ini, kerimbunan rumpun bambu akan menyambut dengan kesejukannya.
                Juga sapaan dari kawanan kera yang berjalan-jalan di sisi jalan maupun yang bergelayut di pohon.
                </p>
                <p className={styles.huruf_curug}>
                Banyak peninggalan sejarah Kerajaan Galuh Purba (Galuh abad ke-7), kerajaan besar yang telah melahirkan keturunan yang nantinya
                mendirikan Kerajaan Majapahit, Kerajaan Galuh Pajajaran dan berbagai kerajaan lainnya di Tatar Pasundan, yang bisa diziarahi.
                <br/>
                Mulai petilasan batu pangcalikan (bekas singasana raja), situs Sanghiyang Bedil, lokasi penyabungan ayam, lambang peribadatan, panyandaan, Cikahuripan serta Makam Adipati Panaekan.
                Sisa-sisa peninggalan Kerajaan Galuh Purba yang masih bisa disaksikan sampai hari ini.
                Ada pula peninggalan yang tak ternilai harganya. Yakni hutan seluas 25 hektare yang terjaga kelestariannya.
                Di dalam situs ini tumbuh berbagai jenis pohon yang usianya sudah tua, bahkan ada yang usianya lebih dari 100 tahun.
                Seperti pohon binong dengan mediannya 3 meter yang diyakini sudah berusia 10 keturunan (sekitar 600 tahun).
                Pohon binong tua ini masih berdiri kokoh di sela-sela kerimbunan hutan cagar Budaya Situs Karangkamulyan.
                Banyak pohon lainnya yang usianya sudah renta, seperti kihideung, bencoy, burahol, nyatuh, heras, kedoya, kisaheun,
                bungur, tutundunan, kibeo, kitamaga, johar dan berbagai jenis pohon lainnya.(<i>Tribunnews.com</i>)
                </p>
            </div>
        )
    }
}
export default Ciung; 