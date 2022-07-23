import React from 'react'

const Progress_bar = ({ bgcolor, progress, height,parentWidth },props) => {
    const Parentdiv = {
        height: height,
        width: `${(parentWidth+230)>270?270:(parentWidth+230)}px`,
        backgroundColor:'#101317',
        borderRadius: 40,
        marginTop: 10
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right'
    }

    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    }

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={progresstext}>{`${progress}g`}</span>
            </div>
        </div>
    )
}

export default Progress_bar;
