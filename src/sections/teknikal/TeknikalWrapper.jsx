import './TeknikalWrapper.scss'

export default function TeknikalWrapper({
    children,
    projectName
}) {
    return (
        <>
            <div className="story" id='teknikal'>
                <div className="width-story">
                    <i class="fa-solid fa-road"></i>
                    <h6 className="title-story">
                        {projectName}
                    </h6>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '7rem'
                    }}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}