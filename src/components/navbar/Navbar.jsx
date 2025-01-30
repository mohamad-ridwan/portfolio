import React, { useEffect } from 'react'
import './Navbar.scss'
import { GetInformation } from '../../graphql/resolvers/information'

function Navbar() {
    const { loading, error, data } = GetInformation()

    useEffect(() => {
        console.log(loading, data)
    }, [loading, data])

    return (
        <>
            <div className="navbar">
                <div className="width-navbar">
                    <div className="column-kiri-navbar">
                        <button className="btn-title-navbar" onClick={() => {
                            window.scrollTo(0, 0)
                        }}>
                            <h6 className="title-navbar">
                                Ridwan
                            </h6>
                        </button>

                        <ul className="menu-navbar">
                            <li className="list-menu-navbar">
                                <a href="#projek" className="name-menu">
                                    Projek
                                </a>
                            </li>
                            <li className="list-menu-navbar">
                                <a href="#skills" className="name-menu">
                                    Keahlian
                                </a>
                            </li>
                            <li className="list-menu-navbar">
                                <a href="#fokus-dan-tujuan-karir" className="name-menu">
                                    Fokus & Tujuan Karir
                                </a>
                            </li>
                            <li className="list-menu-navbar">
                                <a href="#organisasi-dan-pekerjaan" className="name-menu">
                                    Organisasi & Pekerjaan
                                </a>
                            </li>
                            <li className="list-menu-navbar">
                                <a href="#story" className="name-menu">
                                    Singkat Cerita Pengalaman
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="column-kanan-navbar">
                        <a href="#kontak" className="button-hire-me">
                            Bekerja Dengan Saya <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar