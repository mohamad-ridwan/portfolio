import React, { Fragment, useState } from 'react'
import './Organisasi.scss'
import Icons from '../icons/Icons'

export default function Organisasi() {
    const [dataOrganisasi] = useState([
        {
            img: 'udex.jpeg',
            url: 'https://udexmedia.com/'
        },
        {
            img: 'gangco.jpeg',
            url: 'https://github.com/gangco-io'
        },
        {
            img: 'komers.jpeg',
            url: 'https://github.com/REALM-CHAT'
        },
        {
            img: 'perpus.jpg',
            url: 'https://kotabogor.go.id'
        },
        {
            img: 'pdip.png',
            url: 'https://pdiperjuangan.id/'
        }
    ])
    const dataPengalaman = [
        {
            img: 'udex.jpeg',
            url: 'https://udexmedia.com/',
            pt: 'UDEX MEDIA',
            deskripsi: <>
                <p style={{
                    textAlign: 'start',
                    opacity: 0.7,
                    fontSize: '14px'
                }}>
                    Front End Developer
                </p>
            </>,
            date: '2024 -',
            dateIcon: <i class="fa-solid fa-calendar-days" style={{ fontSize: '14px', opacity: 0.7 }}></i>
        },
        {
            img: 'gangco.jpeg',
            url: 'https://github.com/gangco-io',
            pt: 'Gangco',
            deskripsi: <p style={{
                textAlign: 'start',
                opacity: 0.7,
                fontSize: '14px'
            }}>
                Front End Developer
            </p>,
            dateIcon: <i class="fa-solid fa-calendar-days" style={{ fontSize: '14px', opacity: 0.7 }}></i>,
            date: '2024 -'
        },
        {
            img: 'komers.jpeg',
            url: 'https://github.com/REALM-CHAT',
            pt: 'Komers',
            dateIcon: <i class="fa-solid fa-calendar-days" style={{ fontSize: '14px', opacity: 0.7 }}></i>,
            deskripsi: <p style={{
                textAlign: 'start',
                opacity: 0.7,
                fontSize: '14px'
            }}>
                Web Front End Developer & Mobile Android Developer
            </p>,
            date: '2024 -'
        },
        {
            img: 'perpus.jpg',
            url: 'https://kotabogor.go.id',
            pt: 'Perpustakaan dan Galeri kota bogor',
            dateIcon: <i class="fa-solid fa-calendar-days" style={{ fontSize: '14px', opacity: 0.7 }}></i>,
            deskripsi: <p style={{
                textAlign: 'start',
                opacity: 0.7,
                fontSize: '14px'
            }}>
                Full Stack Developer (Internship)
            </p>,
            date: '03/2023 - 09/2023'
        },
        {
            img: 'pdip.png',
            url: 'https://pdiperjuangan.id/',
            pt: 'PDI Perjuangan',
            dateIcon: <i class="fa-solid fa-calendar-days" style={{ fontSize: '14px', opacity: 0.7 }}></i>,
            deskripsi: <p style={{
                textAlign: 'start',
                opacity: 0.7,
                fontSize: '14px'
            }}>
                Front End Developer
            </p>,
            date: '01/2020 - 12/2020'
        }
    ]

    return (
        <>
            <div className="organisasi" id='organisasi-dan-pekerjaan'>
                <div className="width-organisasi">
                    <i class="fa-solid fa-sitemap"></i>
                    <h6 className="title-organisasi">
                        Organisasi & Pekerjaan
                    </h6>
                    <p className="deskripsi-organisasi">
                        Pengalaman saya selama 2 tahun lebih ada di perusahaan, organisasi dan partai.
                    </p>

                    <ul className="column-list-organisasi">
                        {dataOrganisasi.map((e, i) => {
                            return (
                                <Fragment key={i}>
                                    <li className="list-organisasi">
                                        <Icons
                                            img={e.img}
                                            url={e.url}
                                            height='auto'
                                            width='auto'
                                            borderRadius='0'
                                        />
                                    </li>
                                </Fragment>
                            )
                        })}
                    </ul>
                    <div style={{
                        marginTop: '5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        width: '70%',
                    }}>
                        <h3 style={{
                            textAlign: 'start',
                            color: '#fff'
                        }}>Catatan Pengalaman</h3>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            color: '#fff',
                            gap: '2rem',
                            marginTop: '1rem'
                        }}>
                            {dataPengalaman.map((e, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '5px'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        color: '#fff'
                                    }}>
                                        <div style={{
                                            height: '40px',
                                            width: '40px',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}>
                                            <Icons
                                                img={e.img}
                                                url={e.url}
                                                height='30px'
                                                width='30px'
                                                borderRadius='50%'
                                            />
                                        </div>
                                        <h3 style={{
                                            textAlign: 'start'
                                        }}>{e.pt}</h3>
                                    </div>
                                    {e.deskripsi}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px'
                                    }}>
                                        {e.dateIcon}
                                        <span style={{ opacity: 0.7, fontSize: '14px' }}>{e.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}