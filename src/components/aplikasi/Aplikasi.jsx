import React, { useState } from 'react'
import './Aplikasi.scss'
import video from '../../videos/rs-permata.mp4'
import elearning from '../../videos/e-learning.mp4'
import hospiceMedical from '../../videos/hospice-medical.mp4'
import bibit from '../../videos/bibit.mp4'
import rsGatot from '../../videos/rs-gatot-soebroto.mp4'
import Card from '../card/Card'
import adminHM from '../../videos/admin-hm.mp4'
import pendataan from '../../videos/pendataan.mp4'
import komersApp from '../../videos/app-komers.mp4'
import komersLanding from '../../videos/komers-landing.mov'
import storefront from '../../videos/storefront.mov'
import realmInbox from '../../videos/realm-inbox.mov'
import teamInboxApp from '../../videos/team-inbox-app.mov'
import tgCheckout from '../../videos/ecommerce-tg-checkout.mov'
import waCheckout from '../../videos/ecommerce-wa-checkout.mov'

function Aplikasi() {
    const [dataAplikasi] = useState([
        {
            linkProjek: 'https://demo.bizappelite.com/store',
            titleAplikasi: `Storefront`,
            deskripsi: 'Dengan memanfaatkan CSS Module dari fitur Next.JS, Setiap tema dapat memiliki gaya yang unik dan dapat diintegrasikan secara dinamis tanpa mengubah kode dasar aplikasi. Memanfaatkan fitur RSC (React Server Component) untuk mendapatkan performa yang lebih baik.',
            video: storefront,
            github: 'https://github.com/gangco-io/storefront.git',
            tools: [
                {
                    img: 'js.png',
                    url: 'https://www.javascript.com/'
                },
                {
                    img: 'ts.png',
                    url: 'https://www.typescriptlang.org/'
                },
                {
                    img: 'next.png',
                    url: 'https://nextjs.org/'
                },
                {
                    img: 'redux-toolkit.png',
                    url: 'https://redux-toolkit.js.org/'
                },
                {
                    img: 'mt.png',
                    url: 'https://www.material-tailwind.com/'
                },
                {
                    img: 'tailwindcss.png',
                    url: 'https://tailwindcss.com/'
                },
            ]
        },
        {
            linkProjek: 'https://app.komers.io',
            titleAplikasi: `Komers | Boost Customer Engagement with Komers's Conversational Messaging Platform`,
            deskripsi: 'E-commerce management dashboard',
            video: komersApp,
            github: 'https://github.com/REALM-CHAT/realmchat-project.git',
            tools: [
                {
                    img: 'js.png',
                    url: 'https://www.javascript.com/'
                },
                {
                    img: 'react.png',
                    url: 'https://react.dev/'
                },
                {
                    img: 'react-router.png',
                    url: 'https://reactrouter.com/'
                },
                {
                    img: 'socket.png',
                    url: 'https://socket.io/'
                },
                {
                    img: 'redux-toolkit.png',
                    url: 'https://redux-toolkit.js.org/'
                },
                {
                    img: 'material-ui.jpg',
                    url: 'https://mui.com/'
                },
            ]
        },
        {
            linkProjek: 'https://team.realm.chat/login',
            titleAplikasi: `Realmchat - Team Inbox`,
            deskripsi: 'Messaging App',
            video: realmInbox,
            github: 'https://github.com/REALM-CHAT/realm-inbox.git',
            tools: [
                {
                    img: 'js.png',
                    url: 'https://www.javascript.com/'
                },
                {
                    img: 'react.png',
                    url: 'https://react.dev/'
                },
                {
                    img: 'socket.png',
                    url: 'https://socket.io/'
                },
                {
                    img: 'redux-toolkit.png',
                    url: 'https://redux-toolkit.js.org/'
                },
                {
                    img: 'vite.png',
                    url: 'https://vite.dev/guide/'
                },
                {
                    img: 'tailwindcss.png',
                    url: 'https://tailwindcss.com/'
                },
            ]
        },
        {
            linkProjek: 'https://play.google.com/store/apps/details?id=com.udexmedia.realmchat',
            titleAplikasi: `KomChat`,
            deskripsi: 'Messaging App',
            video: teamInboxApp,
            github: 'https://github.com/REALM-CHAT/team-inbox-app.git',
            tools: [
                {
                    img: 'js.png',
                    url: 'https://www.javascript.com/'
                },
                {
                    img: 'ts.png',
                    url: 'https://www.typescriptlang.org/'
                },
                {
                    img: 'react.png',
                    url: 'https://reactnative.dev/'
                },
                {
                    img: 'expo.png',
                    url: 'https://expo.dev/'
                },
                {
                    img: 'react-native-navigation.png',
                    url: 'https://reactnavigation.org/'
                },
                {
                    img: 'socket.png',
                    url: 'https://socket.io/'
                },
                {
                    img: 'redux-toolkit.png',
                    url: 'https://redux-toolkit.js.org/'
                },
                {
                    img: 'firebase.png',
                    url: 'https://console.firebase.google.com/'
                },
                {
                    img: 'android-studio.png',
                    url: 'https://developer.android.com/studio'
                },
            ]
        },
        {
            linkProjek: 'https://komers.io/',
            titleAplikasi: 'Komers - Convert Chats into Sales with WhatsApp Commerce',
            deskripsi: 'Landing Page',
            video: komersLanding,
            github: 'https://github.com/REALM-CHAT/komers-landing.git',
            tools: [
                {
                    img: 'js.png',
                    url: 'https://www.javascript.com/'
                },
                {
                    img: 'ts.png',
                    url: 'https://www.typescriptlang.org/'
                },
                {
                    img: 'next.png',
                    url: 'https://nextjs.org/'
                },
                {
                    img: 'redux-toolkit.png',
                    url: 'https://redux-toolkit.js.org/'
                },
                {
                    img: 'framer-motion.png',
                    url: 'https://motion.dev/'
                },
                {
                    img: 'tailwindcss.png',
                    url: 'https://tailwindcss.com/'
                },
            ]
        },
        {
            linkProjek: 'https://t.me/UdexmediaBot',
            titleAplikasi: 'Telegram Catalog Checkout | Shockingly Simple Checkout - Komers',
            deskripsi: 'Checkout Catalog Telegram Web View',
            video: tgCheckout,
            github: 'https://github.com/REALM-CHAT/realm-catalogue-v2.git',
            tools: [
                {
                    img: 'js.png',
                    url: 'https://www.javascript.com/'
                },
                {
                    img: 'ts.png',
                    url: 'https://www.typescriptlang.org/'
                },
                {
                    img: 'next.png',
                    url: 'https://nextjs.org/'
                },
                {
                    img: 'tailwindcss.png',
                    url: 'https://tailwindcss.com/'
                },
            ]
        },
        {
            linkProjek: 'https://wa.komers.io/order/1810811382774829',
            titleAplikasi: 'WhatsApp Catalog Checkout | Shockingly Simple Checkout - Komers',
            deskripsi: 'WhatsApp Checkout Catalog',
            video: waCheckout,
            github: 'https://github.com/REALM-CHAT/realm-catalogue-v2.git',
            tools: [
                {
                    img: 'js.png',
                    url: 'https://www.javascript.com/'
                },
                {
                    img: 'ts.png',
                    url: 'https://www.typescriptlang.org/'
                },
                {
                    img: 'next.png',
                    url: 'https://nextjs.org/'
                },
                {
                    img: 'tailwindcss.png',
                    url: 'https://tailwindcss.com/'
                },
            ]
        },
        // {
        //     linkProjek: 'https://pendataan-pustakawan.web.app/',
        //     titleAplikasi: 'Vite React TypeScript (PWA)',
        //     deskripsi: 'Sistem Pendataan Pustakawan pada Perpustakaan Kota Bogor. Menggunakan Teknologi Vite React TypeScript, TypeScript dan Terintegrasi (PWA), dan Tailwind CSS, Node JS dan database dari MongoDB. Pengelola global state menggunakan React.Context.',
        //     video: pendataan,
        //     github: 'https://github.com/mohamad-ridwan/pendataan-pustakawan'
        // },
        // {
        //     linkProjek: 'https://hm-admin-six.vercel.app/',
        //     titleAplikasi: 'Next JS Admin Rumah Sakit Hospice Medical',
        //     deskripsi: 'Sistem admin dari Web Rumah Sakit Hospice Medical. Menggunakan Teknologi Framework React (Next JS) dengan App Route, TypeScript dan Tailwind CSS, Node JS dan database dari MongoDB. Pengelola global state menggunakan Zustand.',
        //     video: adminHM,
        //     github: 'https://github.com/mohamad-ridwan/hm-admin'
        // },
        // {
        //     linkProjek: 'https://hospice-medical.web.app/',
        //     titleAplikasi: 'React Pendaftaran Berobat',
        //     deskripsi: 'Sistem informasi rumah sakit, dengan adanya pendaftaran online, artikel, dan komentar pada artikel. Mengelola state global dengan React Context.',
        //     video: hospiceMedical,
        //     github: 'https://github.com/mohamad-ridwan/hospice-medical'
        // },
        // {
        //     linkProjek: 'https://rs-permata.web.app/',
        //     titleAplikasi: 'React Artikel Dengan Pencarian',
        //     deskripsi: 'Sistem informasi rumah sakit, dengan adanya pendaftaran online dan artikel. Pada pencarian menggunakan state management React Context.',
        //     video: video,
        //     github: 'https://github.com/mohamad-ridwan/rumahsakit/tree/master/rumahsakit'
        // },
        // {
        //     linkProjek: 'https://e-learning-rp.web.app/',
        //     titleAplikasi: 'React E-Learning',
        //     deskripsi: 'Sistem pembelajaran online, dengan adanya absen Mahasiswa, obrolan Mahasiswa, dan ketersediaan materi pembelajaran. Sistem login menggunakan autentikasi JSON Web Token. <br/><br/> User (Mahasiswa) tidak perlu register akun karena sudah terdaftar oleh sistem dari data mahasiswa yang aktif. <br/> Akun login User (Mahasiswa) : <br/> NIM : 15100019 <br/> Password : mhs-2021',
        //     video: elearning,
        //     github: 'https://github.com/mohamad-ridwan/elearning'
        // },
        // {
        //     linkProjek: 'https://bibit-rp.web.app/',
        //     titleAplikasi: 'React Artikel Dengan Sub Kategori',
        //     deskripsi: 'Artikel random terbaru pada home page, filter artikel tertentu pada Sub Kategori, dan pencarian artikel. Pada pencarian menggunakan state management React Context.',
        //     video: bibit,
        //     github: 'https://github.com/mohamad-ridwan/bibit'
        // },
        // {
        //     linkProjek: 'https://rs-gatot-soebroto.web.app/',
        //     titleAplikasi: 'React Blogger Rumah Sakit',
        //     deskripsi: 'Sistem informasi rumah sakit, dengan adanya portal berita, data polling, form keluhan masyarakat tentang pelayanan rumah sakit, dan pencarian informasi. Untuk pencarian menggunakan state management Redux Toolkit.',
        //     video: rsGatot,
        //     github: 'https://github.com/mohamad-ridwan/rs-gatot-soebroto'
        // },
    ])
    const [idx, setIdx] = useState(null)

    function RenderHTML({ text }) {
        return (
            <p dangerouslySetInnerHTML={{ __html: text }}></p>
        )
    }

    return (
        <>
            <div className="aplikasi" id='projek'>
                <div className="width-aplikasi">
                    <i class="fa-solid fa-code"></i>
                    <h6 className="title-aplikasi">
                        Pengalaman Projek
                    </h6>

                    <p className="deskripsi-aplikasi">
                        Projek yang saya bangun selama 1 tahun pengalaman mencerminkan hasil dari berbagai proyek yang telah saya kerjakan dengan fokus pada pengembangan web menggunakan teknologi modern seperti Next.js, React, dan CSS Modules. Dalam proses ini, saya telah menghadapi dan menyelesaikan berbagai tantangan teknis, termasuk penerapan tema dinamis dalam satu aplikasi, optimasi performa, serta pengelolaan komponen yang efisien.
                    </p>

                    <div className="column-card-aplikasi">
                        {dataAplikasi.map((e, i) => {
                            return (
                                <Card
                                    key={i}
                                    linkProjek={e.linkProjek}
                                    titleAplikasi={e.titleAplikasi}
                                    deskripsi={<RenderHTML text={e.deskripsi} />}
                                    video={e.video}
                                    linkGithub={e.github}
                                    mouseOver={() => setIdx(i)}
                                    mouseLeave={() => setIdx(null)}
                                    displayHover={idx === i ? 'flex' : 'none'}
                                    tools={e.tools}
                                />
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Aplikasi