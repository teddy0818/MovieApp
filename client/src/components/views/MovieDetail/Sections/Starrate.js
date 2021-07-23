import React, {useEffect, useState} from 'react'
import {Rate} from "antd";
import Axios from 'axios';

function Starrate(props) {
    const rateText = ['싫다!', '별로다ㅜㅜ', '부족해..', '볼만해~', '훌륭해!']
    
    const userFrom = props.userFrom
    const movieId = props.movieId
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [StarRate, setStarRate] = useState(0)

    useEffect(() => {
        Axios.post('/api/starrate/getStarRate', {movieId, userFrom : localStorage.getItem('userId')})
        .then(response => {
            // console.log(response.data)
            if(response.data.success) {
                setStarRate(response.data.rate)
            } else {
                alert('별점을 못가져왔습니다')
            }
        })
    }, [])

    const updStarRate = (value) => {
        setStarRate(value)
        if(StarRate) {
            // 준 별점이 있다면 - 별점 수정
            Axios.post('/api/starrate/ModifyToStarRate', {
                rate:value,
                movieId,
                userFrom:localStorage.getItem('userId')}
                )
            .then(response => {
                // console.log(response.data)
                if(response.data.success) {
                    setStarRate(value)
                } else {
                    alert('별점 수정실패')
                }
            })

        // 수정한 별점이 0이라면 - 별점 제거
        if(value === 0) {
            Axios.post('/api/starrate/DelToStarRate', {
                movieId,
                userFrom:localStorage.getItem('userId')})
            .then(response => {
                // console.log(response.data)
                if(response.data.success) {
                    setStarRate(value)
                } else {
                    alert('별점 삭제실패')
                }
            })
        }
        
        } else {
        //별점이 없다면 - 별점 넣기
            Axios.post('/api/starrate/addToStarRate', {
                rate:value,
                userFrom,
                movieId,
                movieTitle,
                moviePost,
                movieRunTime
            })
            .then(response => {
                // console.log(response.data)
                if(response.data.success) {
                    setStarRate(value)
                } else {
                    alert('별점 주기 실패')
                }
            })
        }
      }


    return (
        <div>
            <span>별점주기</span>
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Rate allowHalf allowClear defaultValue={StarRate} value={StarRate} onChange={updStarRate}/>
                {StarRate ? <span className="ant-rate-text">{rateText[Math.ceil(StarRate) - 1]}</span> : ''}
            </div>
        </div>
    )
}

export default Starrate
