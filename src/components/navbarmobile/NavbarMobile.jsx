import React, { useState } from 'react'
import './NavbarMobile.scss'

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
                            Mohamad Ridwan Apriyadi
                        </h6>
                    </button>

                    <i class={`fa-solid fa-bars ${active ? 'btn-active' : 'not-active'}`} onClick={() => setActive(!active)}></i>
                </div>

                <div className="container-navbar-collapse-mobile">
                    <ul className="navbar-mobile-collapse" style={{
                        minHeight: active ? '150px' : '0px'
                    }}>
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
                            <a href="#kontak" className="button-hire-me">
                                Bekerja Dengan Saya <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </li>
                        <li className="list-menu-navbar">
                            <a href="#story" className="name-menu">
                                Singkat Cerita Pengalaman
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavbarMobile