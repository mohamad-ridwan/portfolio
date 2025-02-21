import React, { Fragment, useState } from 'react'
import './Skills.scss'
import Icons from '../icons/Icons'

function Skills() {
    const [dataSkill] = useState([
        {
            img: 'html.png',
            url: '#'
        },
        {
            img: 'css.webp',
            url: '#'
        },
        {
            img: 'js.png',
            url: 'https://www.javascript.com/'
        },
        {
            img: 'ts.png',
            url: 'https://www.typescriptlang.org/'
        },
        {
            img: 'react.png',
            url: 'https://react.dev/'
        },
        {
            img: 'reactnative.svg',
            url: 'https://reactnative.dev/'
        },
        {
            img: 'react-native-navigation.png',
            url: 'https://reactnavigation.org/'
        },
        {
            img: 'expo.png',
            url: 'https://expo.dev/'
        },
        {
            img: 'next.png',
            url: 'https://nextjs.org/'
        },
        {
            img: 'vite.jpeg',
            url: 'https://vite.dev/guide/'
        },
        {
            img: 'redux-toolkit.png',
            url: 'https://redux-toolkit.js.org/'
        },
        {
            img: 'zustand.png',
            url: 'https://zustand-demo.pmnd.rs/'
        },
        {
            img: 'axios.png',
            url: 'https://axios-http.com/docs/intro'
        },
        {
            img: 'socket.png',
            url: 'https://socket.io/'
        },
        {
            img: 'graphql.png',
            url: 'https://graphql.org/'
        },
        {
            img: 'firebase.png',
            url: 'https://console.firebase.google.com/'
        },
        {
            img: 'tailwindcss.png',
            url: 'https://tailwindcss.com/'
        },
        {
            img: 'sass.png',
            url: 'https://sass-lang.com/'
        },
        {
            img: 'mt.png',
            url: 'https://www.material-tailwind.com/'
        },
        {
            img: 'flowbite.jpg',
            url: 'https://flowbite.com/'
        },
        {
            img: 'bootstrap.png',
            url: 'https://getbootstrap.com/'
        },
        {
            img: 'material-ui.jpg',
            url: 'https://mui.com/'
        },
        {
            img: 'github.png',
            url: 'https://github.com/mohamad-ridwan'
        },
        {
            img: 'android-studio.png',
            url: 'https://developer.android.com/studio?hl=id'
        },
        {
            img: 'figma.png',
            url: 'https://www.figma.com/'
        },
        {
            img: 'postman.png',
            url: 'https://www.postman.com/'
        },
        {
            img: 'emailjs.png',
            url: 'https://www.emailjs.com/'
        },
        {
            img: 'chartjs.png',
            url: 'https://www.chartjs.org/'
        },
    ])

    return (
        <>
            <div className="skills" id='skills'>
                <div className="width-skills">
                    <i class="fa-solid fa-microchip"></i>
                    <h6 className="title-skills">
                        Bahasa Pemrograman & Peralatan
                    </h6>
                    <p className="deskripsi-skills">
                        Selama perjalanan pengembangan, saya mendapatkan pengalaman yang berharga dalam mengoptimalkan performa aplikasi dengan memanfaatkan <strong>React Server Components (RSC)</strong> di Next.js. Dengan mengutamakan <strong>RSC</strong> di setiap component sehingga mengurangi beban pada klien dan meningkatkan waktu respons halaman secara signifikan. Pengoptimalan ini membantu menciptakan aplikasi yang lebih efisien dan cepat.
                        <br /><br />
                        Selain itu, saya juga memiliki pengalaman bekerja dengan Socket.IO untuk membangun aplikasi messaging real-time. Dengan Socket.IO, saya berhasil mengimplementasikan komunikasi dua arah yang stabil dan responsif. Pengalaman ini memperkaya pemahaman saya tentang cara menangani data secara real-time dan memastikan aplikasi tetap lancar serta sinkron saat berkomunikasi antar pengguna.
                    </p>

                    <ul className="column-list-skills">
                        {dataSkill.map((e, i) => {
                            return (
                                <Fragment key={i}>
                                    <li className="list-skills">
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

export default Skills