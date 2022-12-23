import React from 'react'
import github from '../../images/github.png'
import './Card.scss'

function Card({ linkProjek, titleAplikasi, deskripsi, video, mouseOver, mouseLeave, displayHover, linkGithub }) {
    return (
        <>
            <div className="card"
                onMouseOver={mouseOver}
                onMouseLeave={mouseLeave}>
                <video loop autoPlay muted className="video-aplikasi">
                    <source src={video} type='video/mp4' />
                </video>

                <div className="hover-card" style={{ display: displayHover }}>
                    <div className="content-card">
                        <a target='_blank' href={linkProjek} className="title-component">
                            {linkProjek}
                        </a>
                        <h6 className="title-aplikasi-card">
                            {titleAplikasi}
                        </h6>
                        <p className="deskripsi-aplikasi-card">
                            {deskripsi}
                        </p>
                        <a target='_blank' href={linkGithub} className='btn-github'>
                            <img src={github} alt="" className="img-github" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card