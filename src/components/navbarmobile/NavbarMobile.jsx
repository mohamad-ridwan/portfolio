import React, { useState } from 'react'
import './NavbarMobile.scss'
import { Link } from 'react-router-dom'

function NavbarMobile() {
    const [active, setActive] = useState(false)

    return (
        <>
            <div className="navbar-mobile">
                <div className="column-atas-navbar-mobile">
                    <button className="btn-title-navbar" onClick={() => {
                        window.scrollTo(0, 0)
                    }}>
                        <h6 className="title-navbar">
                            Ridwan
                        </h6>
                    </button>

                    <i class={`fa-solid fa-bars ${active ? 'btn-active' : 'not-active'}`} onClick={() => setActive(!active)}></i>
                </div>

                <div className="container-navbar-collapse-mobile">
                    <ul className="navbar-mobile-collapse" style={{
                        minHeight: active ? '180px' : '0px'
                    }}>
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
                        <li className="list-menu-navbar">
                            <a href="#kontak" className="button-hire-me">
                                Bekerja Dengan Saya <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavbarMobile