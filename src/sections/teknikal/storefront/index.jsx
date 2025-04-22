const Storefront = ()=>{
    return (
        <div className='deskripsi-panjang-story'>
        <h3>
            <a href="https://demo.bizappelite.com/store" target="_blank" style={{
                color: '#737373'
            }}>
                1. Project Storefront
            </a>
        </h3>
        <div style={{
            display: 'flex',
            width: '100%',
            maxWidth: '300px',
        }}>
            <img
                src="/folder-structure.jpeg"
                alt=""
                style={{
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'cover',
                }}
            />
        </div>
        <span>
            Dalam project <strong>Storefront</strong> ini, saya begitu dapat pengalaman dalam membangun struktur folder dan bagaimana menyesuaikannya dengan berbagai rendering di Next.js App Router. Saya berusaha membuat arsitektur folder yang jelas dan modular, agar setiap bagian dari aplikasi bisa dioptimalkan dengan fokus dalam rendering yang sesuai.
        </span>
        <img
            src="/css-module.jpeg"
            alt=""
            style={{
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'cover',
            }}
        />
        <span>
            Saya menerapkan fitur dynamic themes dengan memanfaatkan CSS Modules dari Next.js untuk membuat tampilan antarmuka berdasarkan tema yang dipilih. Struktur folder seperti /layout digunakan untuk memastikan bahwa setiap layout dapat menyesuaikan dengan berbagai tema secara dinamis, tanpa harus mengubah komponen dasarnya.
        </span>

        <span>
            Selain itu, saya juga memanfaatkan kemampuan Next.js untuk rendering di sisi server dan client. Folder seperti /lib secara khusus saya bagi menjadi tiga kategori: komponen yang dirender di sisi client, komponen yang dirender di sisi server, dan server actions yang membantu meningkatkan performa aplikasi dengan memanfaatkan React Server Components (RSC).
        </span>

        <span>
            Setiap fitur yang saya bangun juga ditempatkan secara strategis, misalnya fitur seperti carousel, navigasi, hingga add-to-cart diletakkan di folder /client/features agar mudah di debug dan dikembangkan. Logika yang di render di server maupun client juga terstruktur rapi dalam folder seperti /server/helpers dan /client/helpers agar mudah dipahami dan dipelihara.
        </span>

        <span>
            Dengan pendekatan ini, saya ingin memastikan bahwa setiap pengembang yang bekerja dengan project ini bisa dengan mudah memahami alurnya dan apabila menangani fitur dapat fokus pada folder /features, tanpa harus memikirkan struktur yang rumit.
        </span>
        <h3 style={{ textDecoration: 'underline' }}>Kesimpulan</h3>
        <span>
            Pendekatan yang saya terapkan dalam struktur folder /lib ini adalah hasil dari fokus saya pada implementasi rendering yang memprioritaskan <strong>sisi server.</strong> Dengan membagi folder berdasarkan jenis rendering baik itu server-side, client-side, maupun server-actions saya memastikan bahwa pengelolaan komponen menjadi lebih terarah dan efisien.
        </span>
        <span>
            Cara ini tidak hanya memperkuat performa aplikasi secara keseluruhan, tetapi juga memberikan panduan yang jelas bagi para developer yang akan bekerja dengan project ini di masa mendatang. Jika ada penambahan atau perubahan fitur, posisi rendering komponen akan lebih spesifik dan mudah diidentifikasi. Dengan begitu, risiko terjadinya kesalahan dalam proses development akan berkurang, dan seluruh tim pengembang dapat bekerja dengan lebih terstruktur dan efektif terutama dalam rendering.
        </span>
        <h3>Pengoptimalan performa</h3>
        <span>
            Dengan memanfaatkan rendering sisi server dari <strong>React Server Component (RSC)</strong>, saya mendapatkan performa yang cukup baik.
        </span>
        <div className='main-optimize'>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}>
                <h4>Desktop Mode (Tema 3)</h4>
                <img
                    src="/desktop-test.jpeg"
                    alt=""
                    style={{
                        width: 'auto',
                        maxWidth: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}>
                <h4>Mobile Mode (Tema 3)</h4>
                <img
                    src="/mobile-test.jpeg"
                    alt=""
                    style={{
                        width: 'auto',
                        maxWidth: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>
        </div>
        <h4>Dynamic Imports</h4>
        <div>
            <img
                src="/dynamic-imports.jpeg"
                alt=""
                style={{
                    objectFit: 'contain',
                    maxWidth: '100%'
                }}
            />
            <div className='main-dynamic-imports'>
                <img
                    src="/detail-variant.jpeg"
                    alt=""
                    style={{
                        objectFit: 'contain',
                        maxWidth: '100%'
                    }}
                />
                <span>
                    Dengan memanfaatkan <strong>dynamic imports</strong> dan menggunakan <strong>{`{ssr: false}`}</strong>, saya memastikan bahwa setiap komponen yang tidak dibutuhkan saat load time, tidak akan di render pada load time. Sehingga performa aplikasi tetap optimal meskipun ada banyak fitur yang di-render pada <strong>Client Side</strong>.
                </span>
            </div>
            <br />
            <span>Hasil performa (Tema 1) dengan memanfaatkan <strong>Dynamic Imports</strong>.</span>
            <div className='result-dynamic-imports'>
                <img
                    src="/detail-variant-view.jpeg"
                    alt=""
                    style={{
                        objectFit: 'contain',
                        maxWidth: '100%'
                    }}
                />
                <img
                    src="/performance-dynamic-imports.jpeg"
                    alt=""
                    style={{
                        objectFit: 'contain',
                        maxWidth: '100%'
                    }}
                />
            </div>
        </div>
        <div>
            <br />
            <p>Dan yang terakhir adalah bagaimana saya untuk mengelola project dengan membangun sendiri dan perlu dokumentasi untuk kedepannya dan yang mungkin ada partner kerja untuk bergabung ke dalam tim. Jadi saya butuh dokumentasi ini untuk menjaga kestabilan pengembangan dalam desain layout sistem.</p>
            <br />
            <img
                src="/doc1.png"
                alt=""
                style={{
                    objectFit: 'contain',
                    maxWidth: '100%'
                }}
            />
            <img
                src="/doc2.png"
                alt=""
                style={{
                    objectFit: 'contain',
                    maxWidth: '100%'
                }}
            />
            <img
                src="/doc3.png"
                alt=""
                style={{
                    objectFit: 'contain',
                    maxWidth: '100%'
                }}
            />
            <img
                src="/doc4.png"
                alt=""
                style={{
                    objectFit: 'contain',
                    maxWidth: '100%'
                }}
            />
        </div>
    </div>
    )
}

export default Storefront