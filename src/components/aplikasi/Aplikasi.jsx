import React, { useState } from 'react'
import './Aplikasi.scss'
import video from '../../videos/rs-permata.mp4'
import elearning from '../../videos/e-learning.mp4'
import hospiceMedical from '../../videos/hospice-medical.mp4'
import bibit from '../../videos/bibit.mp4'
import rsGatot from '../../videos/rs-gatot-soebroto.mp4'
import Card from '../card/Card'

function Aplikasi() {
    const [dataAplikasi, setDataAplikasi] = useState([
        {
            linkProjek: 'https://rs-permata.web.app/',
            titleAplikasi: 'React Artikel Dengan Pencarian',
            deskripsi: 'Sistem informasi rumah sakit, pendaftaran online dan artikel. Pada pencarian menggunakan state management React Context.',
            video: video,
            github: 'https://github.com/mohamad-ridwan/rumahsakit/tree/master/rumahsakit'
        },
        {
            linkProjek: 'https://e-learning-rp.web.app/',
            titleAplikasi: 'React E-Learning',
            deskripsi: 'Sistem pembelajaran online, absen Mahasiswa, obrolan Mahasiswa, dan ketersediaan materi pembelajaran.',
            video: elearning,
            github: 'https://github.com/mohamad-ridwan/elearning'
        },
        {
            linkProjek: 'https://hospice-medical.web.app/',
            titleAplikasi: 'React Pendaftaran Berobat',
            deskripsi: 'Sistem informasi rumah sakit, pendaftaran online, artikel, dan komentar pada artikel. Mengelola state global dengan React Context.',
            video: hospiceMedical,
            github: 'https://github.com/mohamad-ridwan/hospice-medical'
        },
        {
            linkProjek: 'https://bibit-rp.web.app/',
            titleAplikasi: 'React Artikel Dengan Sub Kategori',
            deskripsi: 'Artikel random terbaru pada home page, filter artikel tertentu pada Sub Kategori, dan pencarian artikel.',
            video: bibit,
            github: 'https://github.com/mohamad-ridwan/bibit'
        },
        {
            linkProjek: 'https://rs-gatot-soebroto.web.app/',
            titleAplikasi: 'React Blogger Rumah Sakit',
            deskripsi: 'Sistem informasi rumah sakit, portal berita, data polling, dan form keluhan masyarakat tentang pelayanan rumah sakit.',
            video: rsGatot,
            github: 'https://github.com/mohamad-ridwan/rs-gatot-soebroto'
        },
    ])
    const [idx, setIdx] = useState(null) 

    return (
        <>
            <div className="aplikasi" id='projek'>
                <div className="width-aplikasi">
                    <i class="fa-solid fa-code"></i>
                    <h6 className="title-aplikasi">
                        Projek yang Saya Buat
                    </h6>

                    <p className="deskripsi-aplikasi">
                        Inilah hasil projek yang telah Saya buat selama 1,5 tahun terakhir. Setelah Saya mengikuti pembelajaran Front End Web Developer di Bootcamp Jvalley dalam 1 tahun, Saya mampu membuat 5 projek dengan React JS.
                    </p>

                    <div className="column-card-aplikasi">
                        {dataAplikasi.map((e, i) => {
                            return (
                                <Card
                                key={i}
                                linkProjek={e.linkProjek}
                                titleAplikasi={e.titleAplikasi}
                                deskripsi={e.deskripsi}
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