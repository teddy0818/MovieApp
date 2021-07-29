import React from 'react'
import { Col } from 'antd' // 한줄에 4개 뜨게 하려고
import unKnown from '../../../image/unKnown.svg'
import noPhoto from '../../../image/no-photo.svg'

function GridCards(props) {

    if (props.movieName) { 
        return (
                <div style={{ position: 'relative', textAlign: 'center', margin:'10px'}}>
                    <a href={`/movie/${props.movieId}`} >
                    {props.image ?
                        <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.movieName} />
                        :
                        <img style={{ width: '100%', height: '320px' }} src={noPhoto} alt={props.movieName} />
                    }
                        <div style={{ color: 'black', fontSize: '15px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', fontWeight:'bolder', fontSize:'20px'}}>{props.movieName}</div>
                        <div style={{color: 'gray'}}>{props.date} ・ 평점 {props.average}</div>
                    </a>
                </div>
        )  
    } else { // 출연진들
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative', textAlign: 'center'}}>
                    {props.image ?
                    <img style={{ width: '90%', height: '320px' }} src={props.image} alt={props.characterName} />
                    :
                    <img style={{ width: '90%', height: '320px' }} src={unKnown} />
                    }
                    <div style={{ color: 'black', fontSize: '15px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', fontWeight:'bolder', fontSize:'20px'}}>{props.characterName}</div>
                        
                </div>
            </Col>
        )

    }
}

export default GridCards
