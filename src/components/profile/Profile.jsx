import React from 'react'
import './Profile.scss'
import imgProfile from '../../images/profile.svg'

function Profile() {
    return (
        <>
            <div className="profile">
                <div className="width-profile">
                    <div className="column-kiri-profile">
                        <h6 className="title-profile">
                            Hi, Saya Ridwan.
                            <br />
                            Front End Developer React JS.
                        </h6>
                        <p className="deskripsi-profile">
                            Saya Mohamad Ridwan Apriyadi umur 21 tahun, Lulusan TKJ (Teknik Komputer & Jaringan) SMK AL-Muhtadin
                            Depok tahun angkatan 2019 dan melanjut kuliah di Universitas BSI Depok tahun ajaran 2020.
                            Memiliki pengalaman belajar di JVALLEY dengan mempelajari membangun Front End Website sejak tahun 2020.
                        </p>
                        <div className="column-btn-profile">
                            <a href='#kontak' className="btn-profile btn-work">
                                Bekerja Dengan Saya
                            </a>
                            <a href='#projek' className="btn-profile btn-projek">
                                Lihat Projek Saya
                            </a>
                        </div>
                    </div>

                    <img src={imgProfile} alt="" className="img-profile" />
                </div>
            </div>
        </>
    )
}

export default Profile