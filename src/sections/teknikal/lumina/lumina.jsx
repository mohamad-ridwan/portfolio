import lumina from '../../../videos/streams-lumina.mp4';
import luminaOnline from '../../../videos/lumina-online.mp4';
import CpuUsageActiveChat from '../../../videos/cpu-usage-active-chat.mp4'
import CpuUsageActiveChatWhenScrolling from '../../../videos/cpu-usage-active-chat-when-scrolling.mp4'
import CpuUsageActiveChatWhenScrollBottom from '../../../videos/cpu-usage-active-chat-when-scroll-bottom.mp4'
import CpuUsageActiveChatWhenTyping from '../../../videos/cpu-usage-active-chat-when-typing.mp4'
import CpuUsageActiveChatWhenNavigation from '../../../videos/cpu-usage-active-chat-when-navigation.mp4'
import firstMessageFPS from '../../../videos/first-message-lumina-fps.mp4'
import scrollingFPS from '../../../videos/scrolling-lumina-fps.mp4'

export default function Lumina() {  
    return (
        <div className='deskripsi-panjang-story'>
             <span>
                Hal yang paling penting dalam Realtime Messaging App adalah load data yang cepat dan responsibilitas yang tinggi. Hal ini sangat penting untuk menjaga pengalaman pengguna yang baik dan memastikan bahwa aplikasi dapat menangani beban yang tinggi tanpa mengalami penurunan kinerja.
                <br />
                <br />
                Salah satunya adalah load awal Chat Room Messages yang cepat, tanpa menunggu semua data pesan diambil dari server. Dengan menggunakan <strong>Teknik Pagination</strong>, proses pengambilan data menjadi lebih efisien.
                <br /><br />
                <img
                    src="/pagination-lumina.png"
                    alt=""
                    style={{
                        objectFit: 'contain',
                        maxWidth: '100%'
                    }}
                />
            </span>

            <video loop autoPlay muted className="video-aplikasi">
                <source src={lumina} type='video/mp4' />
            </video>

            <span>
            Data dikirim dalam 20 pesan terbaru. Dengan cara ini, kita dapat mengurangi waktu tunggu pengguna untuk melihat pesan yang ada <strong>pada load pertama kali</strong>.
            </span>

            <span>
                Dan hal yang paling penting lagi adalah <strong>Penggunaan Memori</strong>, dalam <strong>Tools Performance Monitor</strong> dari Chrome, kita bisa melihat begitu sedikit penggunaan <strong>CPU Usage</strong> dari user aktif dalam chatting. Dan juga rendering yang stabil dengan di ukur dari <strong>Frame Rate</strong>.
            </span>

            <video loop autoPlay muted className="video-aplikasi">
                <source src={CpuUsageActiveChat} type='video/mp4' />
            </video>

            <video loop autoPlay muted className="video-aplikasi">
                <source src={firstMessageFPS} type='video/mp4' />
            </video>

            <span>
                Kebanyakan <strong>Messaging App</strong> dalam aplikasi nyata adalah saat pengguna dalam keadaan scrolling pentingnya pesan yang selalu masuk dari user ke 2 itu tidak secara langsung masuk dalam <strong>State</strong>, dan ini sangat meringankan <strong>CPU Usage</strong> karena tidak ada beban saat berada di posisi ini.
            </span>

            <video loop autoPlay muted className="video-aplikasi">
                <source src={CpuUsageActiveChatWhenScrolling} type='video/mp4' />
            </video>

            <span>
                Untuk melihat pesan terbaru User bisa scroll ke bawah lagi atau navigasi dari tombol yang absolute.
            </span>

            <video loop autoPlay muted className="video-aplikasi">
                <source src={CpuUsageActiveChatWhenScrollBottom} type='video/mp4' />
            </video>

            <span>
                Dalam <strong>State</strong> yang saya gunakan adalah <strong>ShallowRef</strong>, mengapa? karena setelah saya menggunakan <strong>Ref</strong> itu banyak makan memori karena dari <strong>Ref</strong> itu sendiri selalu membandingkan bagaimana setiap properti yang di dalam <strong>Array Object</strong> itu berubah. Bayangkan jika kita sering update <strong>State</strong> dan data yang lumayan banyak, itu sangat lambat dalam pengalaman saya. Dan tentu <strong>ShallowRef</strong> dapat mengatasinya. Seperti penggunaan <strong>CPU Usage</strong> dibawah ini, CPU tidak begitu berat. Bahkan saat menggunakan <strong>Ref</strong> itu bisa mencapai <strong>100%</strong> saat Scrolling.
            </span>

            <video loop autoPlay muted className="video-aplikasi">
                <source src={scrollingFPS} type='video/mp4' />
            </video>

            <span>Dan tentu saja ini juga dapat optimal saat Pengguna aktif mengetik.</span>

            <video loop autoPlay muted className="video-aplikasi">
                <source src={CpuUsageActiveChatWhenTyping} type='video/mp4' />
            </video>

            <span>
                Ini adalah bukti dari performa <strong>Lumina</strong>, dalam interaktifitas User yang seperti umumnya dapat optimal. Itulah alasannya saya gunakan <strong>ShallowRef</strong> untuk mengoptimalkan rendering yang sering. Dan memperhatikan hal-hal kecil untuk di memoisasi. Dibawah ini adalah hasil interaktifitas record seperti <strong>CPU Usage</strong> dan <strong>Performance interactions</strong>.
            </span>
            
            <video loop autoPlay muted className="video-aplikasi">
                <source src={CpuUsageActiveChatWhenNavigation} type='video/mp4' />
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