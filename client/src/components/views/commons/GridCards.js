import React from 'react'
import { Col } from 'antd' // 한줄에 4개 뜨게 하려고

function GridCards(props) {

    if (props.landingPage) { 
        return (
            // 한 칼럼은 총 24. lg(최댓값):6, md(중간값):3, xs(최솟값):24
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                    <a href={`/movie/${props.movieId}`} >
                        <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.movieName} />
                    </a>
                </div>
            </Col>
        )  
    } else {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                        <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.characterName} />
                </div>
            </Col>
        )

    }
}

export default GridCards
