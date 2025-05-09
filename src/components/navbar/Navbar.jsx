import React, { useEffect } from 'react'
import './Navbar.scss'
import { GetInformation } from '../../graphql/resolvers/information'
import { Link } from 'react-router-dom'

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
                        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="btn-title-navbar">
                            <h6 className="title-navbar">
                                Ridwan
                            </h6>
                        </Link>

                        <ul className="menu-navbar">
                            <li className="list-menu-navbar">
                                <Link to="/#projek" className="name-menu">
                                Projek
                                </Link>
                            </li>
                            <li className="list-menu-navbar">
                            <Link to="/#skills" className="name-menu">
                            Keahlian
                                </Link>
                            </li>
                            <li className="list-menu-navbar">
                            <Link to="/#fokus-dan-tujuan-karir" className="name-menu">
                            Fokus & Tujuan Karir
                                </Link>
                            </li>
                            <li className="list-menu-navbar">
                            <Link to="/#organisasi-dan-pekerjaan" className="name-menu">
                            Organisasi & Pekerjaan
                                </Link>
                            </li>
                            {/* <li className="list-menu-navbar">
                                <a href="#teknikal" className="name-menu">
                                    Teknikal Pengalaman
                                </a>
                            </li> */}
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