import React, { useState } from 'react'
import './Skills.scss'

function Skills() {
    const [dataSkill] = useState([
        {
            name: 'JavaScript'
        },
        {
            name: 'Typescript'
        },
        {
            name: 'React JS / Vite / (PWA)'
        },
        {
            name: 'Next JS'
        },
        {
            name: 'HTML'
        },
        {
            name: 'Tailwind CSS/CSS/SASS'
        },
        {
            name: 'Zustand/Redux Toolkit/Context'
        },
        {
            name: 'Git'
        }
    ])

    return (
        <>
            <div className="skills" id='skills'>
                <div className="width-skills">
                    <i class="fa-solid fa-microchip"></i>
                    <h6 className="title-skills">
                        Keahlian Saya
                    </h6>
                    <p className="deskripsi-skills">
                        Setelah mengikuti pembelajaran Front End Web Developer di Bootcamp Jvalley dalam 1 tahun, saya dapat menguasai keahlian sebagai berikut.
                    </p>

                    <ul className="column-list-skills">
                        {dataSkill.map((e, i) => {
                            return (
                                <>
                                    <li className="list-skills" key={i}>
                                    <i class="fa-solid fa-circle-check"></i> <h6 className="name-list-skills">
                                            {e.name}
                                        </h6>
                                    </li>
                                </>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Skills