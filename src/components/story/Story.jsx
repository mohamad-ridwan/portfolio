import React from 'react'
import './Story.scss'
import Storefront from './storefront'
import RealmChat from './realm-chat'

export default function Story() {
    return (
        <>
            <div className="story" id='teknikal'>
                <div className="width-story">
                    <i class="fa-solid fa-road"></i>
                    <h6 className="title-story">
                        Teknikal Pengalaman
                    </h6>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '7rem'
                    }}>
                        <Storefront />
                        <RealmChat />
                    </div>
                </div>
            </div>
        </>
    )
}