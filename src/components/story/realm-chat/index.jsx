export default function RealmChat() {
    return (
        <div className='deskripsi-panjang-story'>
            <h3>
                <a href="https://team.realm.chat/" target="_blank" style={{
                    color: '#737373'
                }}>
                    2. Project Realmchat
                </a>
            </h3>
            <h3>{'>'} Load Big Data</h3>
            <img
                src="/chat-network.jpeg"
                alt=""
                style={{
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'cover',
                }}
            />
            <span>
                Masalah yang banyak terjadi pada <strong>Messaging App</strong> adalah banyaknya data pesan di setiap <strong>akun pengguna.</strong> Dampaknya adalah saat pertama kali pengguna load aplikasi akan sangat lambat, apalagi dalam sekitar 5000 - puluhan ribu data.
            </span>
            <span>
                Hal ini bukan praktik dan cara yang terbaik untuk digunakan pada <strong>Messaging App</strong> apabila sisi klien request untuk mengambil data pesan dalam proses mendapatkan data sampai <strong>request jaringan</strong> itu dinyatakan selesai. Hal ini akan membuat pengguna menunggu sampai UI loading chat berakhir dalam waktu 3 - 5 detik jika jumlah datanya sangat besar.
            </span>

            <img
                src="/streams-api.png"
                alt=""
                style={{
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'cover',
                }}
            />
            <span>
                Inilah solusinya, dengan menggunakan <strong>Streams API</strong> pada JavaScript proses pengambilan data menjadi lebih tepat. Data akan diproses dengan <strong>Buffer</strong> dan akan dihasilkan pada <strong>Chunk</strong>. Setiap chunk yang telah melewati antrian <strong>streams</strong> dan di convert ke <strong>JSON</strong> akan di update pada <strong>state chat</strong>, dan begitu seterusnya sampai streams selesai. Contohnya ada pada gambar <strong>console browser</strong> dibawah ini.
            </span>
            <img
                src="/chunk.jpeg"
                alt=""
                style={{
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'cover',
                }}
            />
            <span>Terdapat log dengan keterangan <strong>STREAMS-API-RESULT</strong> dan array, itulah hasil dari <strong>chunk</strong> yang sudah melewati antrian streams. Dengan cara ini pengguna dapat segera melihat pesan yang ada ketika proses chunk pertama kali telah dihasilkan.</span>

            <h3>{'>'} Race Condition Message API, antara Fetch API dengan socket.on dari Socket.IO</h3>
            <span>
                Masalah ini sering terjadi dengan tidak sinkron antara <strong>Fetch API request</strong> dengan <strong>socket.on</strong> saat pertama kali load chat. Seperti contoh saat pertama kali pengguna load chat, dan App melakukan fetch data, saat proses <strong>pending</strong> jaringan terkadang <strong>socket.on</strong> dijalankan ketika ada pesan baru yang masuk.
            </span>
            <img
                src="/race-condition.jpeg"
                alt=""
                style={{
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'cover',
                }}
            />
            <span>
                Hal ini membuat pembaruan data chat yang tidak tepat, dan mendapatkan pesan yang belum terbaca tidak sesuai dengan data yang terbaru. Bahkan terkadang proses <strong>Fetch API</strong> untuk data chat dan <strong>socket.on</strong> untuk chat terbaru yang masuk itu berjalan dengan satu waktu perjalanan jaringan.
            </span>
            <span>
                Hal ini memerlukan validasi untuk <strong>timestamp</strong> antara data dari <strong>Fetch API</strong> dengan data dari <strong>socket.on</strong>. Validasi ini hanya dilakukan apabila proses terjadi race condition, dengan catatan <strong>Streams Data API</strong> sedang berlangsung. Setiap pesan baru masuk dari <strong>socket.on</strong> akan di simpan pada <strong>state (sementara)</strong> saya menyebut state nya <strong>recentChatsOnStreams</strong>. Dalam setiap proses <strong>chunk</strong> pada <strong>streams</strong> dihasilkan, pesan dari <strong>recentChatsOnStreams</strong> akan di compare antara <strong>timestamp</strong> tersebut. Seperti contoh gambar dibawah ini.
            </span>
            <img
                src="/compare-timestamp.jpeg"
                alt=""
                style={{
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'cover',
                }}
            />
            <span>
                Dengan cara ini, data dengan <strong>timestamp</strong> yang sama tidak akan di kalkulasikan pada jumlah properti <strong>unreadCount</strong>. Proses ini berjalan sampai <strong>streams</strong> selesai.
            </span>

            <span>
                Dan ketika <strong>streams</strong> telah selesai, asal state dari semua chat <strong>(recentChats)</strong> akan diperbarui dari state <strong>recentChatsOnStreams</strong>. Ini memberitahukan bahwa ada pesan baru yang masuk saat proses pengambilan keseluruhan data chat. Dan saat <strong>streams</strong> selesai properti <strong>unreadCount</strong> juga di kalkulasikan pada pesan yang baru masuk dan dijumlahkan dari total <strong>unreadCount</strong> pada <strong>Fetch API</strong> dengan state <strong>recentChats</strong>. Berikut logic gambar dibawah ini.
            </span>
            <img
                src="/compare-msg.jpeg"
                alt=""
                style={{
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'cover',
                }}
            />
            <span>
                Dengan cara ini tidak ada data yang bentrok atau salah dalam proses <strong>Race Condition Message API</strong> {':)'}.
            </span>
        </div>
    )
}