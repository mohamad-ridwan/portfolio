import React from 'react'
import './CareerFocus.scss'

export default function CareerFocus() {
    return (
        <>
            <div className="career" id='fokus-dan-tujuan-karir'>
                <div className="width-career">
                    <i class="fa-solid fa-bullseye"></i>
                    <h6 className="title-career">
                        Fokus & Tujuan Karir
                    </h6>
                    <p className='deskripsi-career'>
                        <span style={{ opacity: 0.7 }}>
                            Saat ini, fokus saya adalah pada pengembangan web dan aplikasi Android, terutama dengan menggunakan React.js dan framework-nya, Next.js, untuk pengembangan web. Saya memiliki pengalaman dalam e-commerce development, baik dari sisi toko online maupun dashboard manajemen atau control panel. Meski saya banyak berfokus pada pengembangan e-commerce, saya juga terbuka untuk kasus penggunaan lainnya dan selalu siap menerima tantangan baru.
                        </span>
                        <br />
                        <img
                            src='./icons/se.png'
                            style={{
                                maxWidth: '100%',
                            }}
                        />
                        <br />
                        <span style={{ opacity: 0.7 }}>
                            Tujuan karir saya adalah untuk bekerja di startup besar sebagai Front End Engineer, di mana saya dapat memanfaatkan berbagai peluang untuk terus berkembang dan belajar. Saya ingin memperluas pengalaman dan keahlian saya, dengan harapan untuk terus maju hingga menjadi seorang Software Engineer Front End yang handal. Selama satu tahun terakhir ini, saya semakin memahami bahwa pekerjaan sebagai Software Engineer memberikan banyak peluang untuk berkembang, baik dalam hal teknis maupun kemampuan problem solving.
                        </span>
                    </p>

                    {/* <ul className="column-list-skills">

                    </ul> */}
                </div>
            </div>
        </>
    )
}
