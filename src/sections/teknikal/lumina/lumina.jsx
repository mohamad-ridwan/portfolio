import lumina from '../../../videos/streams-lumina.mp4';
import luminaOnline from '../../../videos/lumina-online.mp4';

export default function Lumina() {  
    return (
        <div className='deskripsi-panjang-story'>
             <span>
                Hal yang paling penting dalam Realtime Messaging App adalah load data yang cepat dan responsibilitas yang tinggi. Hal ini sangat penting untuk menjaga pengalaman pengguna yang baik dan memastikan bahwa aplikasi dapat menangani beban yang tinggi tanpa mengalami penurunan kinerja.
                <br />
                <br />
                Salah satunya adalah load awal Chat Room Messages yang cepat, tanpa menunggu semua data pesan diambil dari server. Dengan menggunakan <strong>Streams API</strong> pada JavaScript, proses pengambilan data menjadi lebih efisien.
                <br /><br />
                <img
                    src="/event-streams-lumina.png"
                    alt=""
                    style={{
                        objectFit: 'contain',
                        maxWidth: '100%'
                    }}
                />
                Data dikirim setiap 20 Array Buffer menggunakan <strong>cursor</strong> method pada <strong>Mongoose</strong>, dan setiap 20 Array Buffer tersebut akan diambil oleh <strong>Event Stream</strong> dan diolah menjadi <strong>JSON</strong>. Dengan cara ini, kita dapat mengurangi waktu tunggu pengguna untuk melihat pesan yang sudah ada sebelumnya.
            </span>

            <video loop autoPlay muted className="video-aplikasi">
                <source src={lumina} type='video/mp4' />
            </video>

            <span>
  Dan belum cukup pada sampai saat ini... <strong>Apa itu selanjutnya...?</strong>
  <br /><br />
  <img
    src="/icons/banner-redis.png"
    alt=""
    style={{
      objectFit: 'contain',
      maxWidth: '100%'
    }}
  />
  Yap betul, <strong>Redis</strong>. Dalam aplikasi nyata, Redis sangat membantu dalam hal caching data yang sering diakses. Dengan menggunakan Redis, kita dapat menyimpan data yang sering diambil dari database ke dalam memori, sehingga mengurangi waktu akses dan meningkatkan performa aplikasi secara keseluruhan.
  <br /><br />
  Dalam implementasi yang saya lakukan, Redis tidak hanya digunakan untuk caching data, tetapi juga untuk menyimpan <strong>informasi user yang sedang masuk ke dalam chat room</strong> dan <strong>user yang sedang online</strong>. Dengan begitu, sistem dapat dengan cepat mengetahui siapa saja yang aktif dan sedang berada di dalam ruang obrolan tertentu, tanpa harus terus-menerus mengakses database.
</span>
<video loop autoPlay muted className="video-aplikasi">
                <source src={luminaOnline} type='video/mp4' />
            </video>
            <img
                    src="/lumina-online.png"
                    alt=""
                    style={{
                        objectFit: 'contain',
                        maxWidth: '100%'
                    }}
                />
            <span>Prosesnya sangat cepat kan.. :D</span>
        </div>
    )
}