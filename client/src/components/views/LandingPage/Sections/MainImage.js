import React from 'react';


// props 을 이용하여 이미지 링크를 받아옴
function MainImage(props) {
    return (
<div>
    <div style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0) 39%
    , rgba(0,0,0,0) 41%
    , rgba(0,0,0,0.65) 100%),
    url('${props.image}'), #1c1c1c`,
        height: '600px',
        backgroundSize: '100%, cover',
        backgroundPosition: 'center, center',
        width: '100%',
        position: 'relative'
    }}>
        <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem' }}>
            <h2 style={{ color: 'white' }}> {props.title} </h2>
            <p style={{ color: 'white', fontSize: '1rem'}}> {props.description} </p>
        </div>
    </div>
</div>
    )
}

export default MainImage