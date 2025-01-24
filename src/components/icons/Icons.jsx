import React from 'react'

export default function Icons({
    img,
    url,
    width = '35px',
    height = '35px',
    borderRadius = '50%',
    maxWidth = '80px',
}) {
    return (
        <a target='_blank' href={url}>
            <img src={`./icons/${img}`} alt="" style={{
                width: height,
                height: width,
                objectFit: 'cover',
                borderRadius: borderRadius,
                maxWidth,
            }} />
        </a>
    )
}