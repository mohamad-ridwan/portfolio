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
        }
    ])

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
                </div>
            </div>
        </>
    )
}