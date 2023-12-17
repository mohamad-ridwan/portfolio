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

function Aplikasi() {
    const [dataAplikasi] = useState([
        {
            linkProjek: 'https://pendataan-pustakawan.web.app/',
            titleAplikasi: 'Vite React TypeScript',
            deskripsi: 'Sistem Pendataan Pustakawan pada Perpustakaan Kota Bogor. Menggunakan Teknologi Vite React TypeScript, TypeScript dan Tailwind CSS, Node JS dan database dari MongoDB. Pengelola global state menggunakan React.Context.',
            video: pendataan,
            github: 'https://github.com/mohamad-ridwan/pendataan-pustakawan'
        },
        {
            linkProjek: 'https://hm-admin-six.vercel.app/',
            titleAplikasi: 'Next JS Admin Rumah Sakit Hospice Medical',
            deskripsi: 'Sistem admin dari Web Rumah Sakit Hospice Medical. Menggunakan Teknologi Framework React (Next JS) dengan App Route, TypeScript dan Tailwind CSS, Node JS dan database dari MongoDB. Pengelola global state menggunakan Zustand.',
            video: adminHM,
            github: 'https://github.com/mohamad-ridwan/hm-admin'
        },
        {
            linkProjek: 'https://hospice-medical.web.app/',
            titleAplikasi: 'React Pendaftaran Berobat',
            deskripsi: 'Sistem informasi rumah sakit, dengan adanya pendaftaran online, artikel, dan komentar pada artikel. Mengelola state global dengan React Context.',
            video: hospiceMedical,
            github: 'https://github.com/mohamad-ridwan/hospice-medical'
        },
        {
            linkProjek: 'https://rs-permata.web.app/',
            titleAplikasi: 'React Artikel Dengan Pencarian',
            deskripsi: 'Sistem informasi rumah sakit, dengan adanya pendaftaran online dan artikel. Pada pencarian menggunakan state management React Context.',
            video: video,
            github: 'https://github.com/mohamad-ridwan/rumahsakit/tree/master/rumahsakit'
        },
        {
            linkProjek: 'https://e-learning-rp.web.app/',
            titleAplikasi: 'React E-Learning',
            deskripsi: 'Sistem pembelajaran online, dengan adanya absen Mahasiswa, obrolan Mahasiswa, dan ketersediaan materi pembelajaran. Sistem login menggunakan autentikasi JSON Web Token. <br/><br/> User (Mahasiswa) tidak perlu register akun karena sudah terdaftar oleh sistem dari data mahasiswa yang aktif. <br/> Akun login User (Mahasiswa) : <br/> NIM : 15100019 <br/> Password : mhs-2021',
            video: elearning,
            github: 'https://github.com/mohamad-ridwan/elearning'
        },
        {
            linkProjek: 'https://bibit-rp.web.app/',
            titleAplikasi: 'React Artikel Dengan Sub Kategori',
            deskripsi: 'Artikel random terbaru pada home page, filter artikel tertentu pada Sub Kategori, dan pencarian artikel. Pada pencarian menggunakan state management React Context.',
            video: bibit,
            github: 'https://github.com/mohamad-ridwan/bibit'
        },
        {
            linkProjek: 'https://rs-gatot-soebroto.web.app/',
            titleAplikasi: 'React Blogger Rumah Sakit',
            deskripsi: 'Sistem informasi rumah sakit, dengan adanya portal berita, data polling, form keluhan masyarakat tentang pelayanan rumah sakit, dan pencarian informasi. Untuk pencarian menggunakan state management Redux Toolkit.',
            video: rsGatot,
            github: 'https://github.com/mohamad-ridwan/rs-gatot-soebroto'
        },
    ])
    const [idx, setIdx] = useState(null)

    function RenderHTML({text}){
        return(
            <p dangerouslySetInnerHTML={{__html: text}}></p>
        )
    }

    return (
        <>
            <div className="aplikasi" id='projek'>
                <div className="width-aplikasi">
                    <i class="fa-solid fa-code"></i>
                    <h6 className="title-aplikasi">
                        Projek yang Saya Buat
                    </h6>

                    <p className="deskripsi-aplikasi">
                        Inilah hasil projek yang telah Saya buat selama 1,5 tahun terakhir. Setelah Saya mengikuti pembelajaran Front End Web Developer di Bootcamp Jvalley dalam 1 tahun, Saya mampu membuat 5 projek dengan React JS. Semua projek ini dibangun dengan Function Component, dan lebih banyak menggunakan React Context untuk global state management. Namun ada juga yang menggunakan Redux Toolkit. Untuk styling semua projek ini Saya menggunakan Sass.<br /><br /> Dan Dari semua data projek ini terhubung dengan API yang Saya buat sendiri dengan Restful API, menggunakan Node JS untuk Backend dan MongoDB untuk Database. Untuk hosting projek ini menggunakan Firebase Hosting.
                    </p>

                    <div className="column-card-aplikasi">
                        {dataAplikasi.map((e, i) => {
                            return (
                                <Card
                                key={i}
                                linkProjek={e.linkProjek}
                                titleAplikasi={e.titleAplikasi}
                                deskripsi={<RenderHTML text={e.deskripsi}/>}
                                video={e.video}
                                linkGithub={e.github}
                                mouseOver={()=>setIdx(i)}
                                mouseLeave={()=>setIdx(null)}
                                displayHover={idx === i ? 'flex' : 'none'}
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