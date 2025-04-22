import React from 'react'
import github from '../../images/github.png'
import './Card.scss'
import Icons from '../icons/Icons'
import { Link } from 'react-router-dom'

function Card({ linkProjek, titleAplikasi, deskripsi, video, mouseOver, mouseLeave, displayHover, linkGithub, tools, teknikalSlug }) {
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
                        <h6 className="title-aplikasi-card" style={{
                            marginBottom: teknikalSlug ? '0px' : '15px',
                        }}>
                            {titleAplikasi}
                        </h6>
                        {teknikalSlug && 
                        <Link to={`/teknikal/${teknikalSlug}`} className="teknikal-btn">
                            Lihat Teknikal
                        </Link>}
                        <h5 className='language-title'>Languages and Tools</h5>
                        <div className='tools'>
                            {tools?.map((tool, i) => {
                                return (
                                    <Icons key={i} img={tool.img} url={tool.url} />
                                )
                            })}
                        </div>
                        <hr style={{
                            marginTop: '10px',
                            marginBottom: '10px',
                        }}/>
                        <p className="deskripsi-aplikasi-card">{deskripsi}</p>
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