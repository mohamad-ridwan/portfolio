import React from 'react'
import './Profile.scss'
import imgProfile from '../../images/profile.svg'

function Profile() {
    return (
        <>
            <div className="profile">
                <div className="width-profile">
                    <div className="column-kiri-profile">
                        <div className='column-profile'>
                            <img
                                src="/me.jpeg"
                                alt=""
                                className='me'
                            />
                            <div>
                                <h6 className="title-profile">
                                    Hi, Saya Ridwan.
                                    <br />
                                    Front End Developer.
                                </h6>
                            </div>
                        </div>
                        <p className="deskripsi-profile">
                            Nama lengkap saya Mohamad Ridwan Apriyadi. Dalam satu tahun terakhir, saya telah mendapatkan banyak pengalaman dalam pengembangan aplikasi e-commerce, dengan fokus pada pengoptimalan performa rendering antarmuka pengguna dan menciptakan pengalaman pengguna yang cepat, responsif dan modern. <br /><br />Dengan menerapkan prinsip Clean Code, hal ini yang dapat memotivasi saya untuk selalu menganalisis kode dan mencegah kode logic atau komponen yang duplikasi. Dari motivasi ini, mendorong saya untuk selalu berpikir dalam teknis di setiap kasus.
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