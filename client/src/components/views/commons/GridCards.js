import React from 'react'
import { Col } from 'antd' // 한줄에 4개 뜨게 하려고
import unKnown from '../../../image/unKnown.svg'

function GridCards(props) {

    if (props.movieName) { 
        return (
            // 한 칼럼은 총 24. lg(최댓값):6, md(중간값):3, xs(최솟값):24
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative', textAlign: 'center'}}>
                    <a href={`/movie/${props.movieId}`} >
                        <img style={{ width: '85%', height: '320px' }} src={props.image} alt={props.movieName} />
                        <div style={{ color: 'black', fontSize: '15px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', fontWeight:'bolder', fontSize:'20px'}}>{props.movieName}</div>
                    </a>
                </div>
            </Col>
        )  
    } else { // 출연진들
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative', textAlign: 'center'}}>
                    {props.image ?
                    <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.characterName} />
                    :
                    <img style={{ width: '100%', height: '320px' }} src={unKnown} alt={props.characterName} />
                }
                    <div style={{ color: 'black', fontSize: '15px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', fontWeight:'bolder', fontSize:'20px'}}>{props.characterName}</div>
                        
                </div>
            </Col>
        )

    }
}

export default GridCards
