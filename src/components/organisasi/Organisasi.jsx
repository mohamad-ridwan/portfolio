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
                    Perusahaan IT Consultant yang berada di Malaysia.
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
                Organisasi yang dibuat oleh Perusahaan UDEX MEDIA. Organisasi ini berkerjasama dengan agency Perusahaan <strong><a href="https://www.bizapp.com.my" target='_blank' style={{
                    color: '#fff'
                }}>bizapp</a></strong>.
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
                Merupakan Start Up yang dibangun oleh Perusahaan UDEX MEDIA.
            </p>,
            date: '2024 -'
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
                        Berikut adalah pengalaman organisasi dan pekerjaan dalam 1 tahun terakhir.
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
                            flexDirection: 'column',
                            color: '#fff',
                            gap: '1.5rem',
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
                                        <Icons
                                            img={e.img}
                                            url={e.url}
                                            height='30px'
                                            width='30px'
                                            borderRadius='50%'
                                        />
                                        <h3>{e.pt}</h3>
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