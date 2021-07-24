import React,{useEffect, useState} from 'react'
import Axios from 'axios'
import './starrate.css'
import { Popover } from 'antd'
import { API_URL, API_KEY, IMAGE_BASE_URL} from "../../Config";
import Starrate from '../MovieDetail/Sections/Starrate'

function StarRatePage() {

    const [StarRates, setStarRates] = useState([])

    useEffect(() => {
        Axios.post('/api/starrate/getStarRatedMovies', {userFrom : localStorage.getItem('userId')})
        .then(response => {
            // console.log(response.data)
            if(response.data.success) {
                setStarRates(response.data.starrates)
            } else {
                alert('별점 준 영화들을 못가져왔습니다!!')
            }
        })
    }, [])  

    const renderCards = StarRates.map((starrate, index) => {
        const content = (
            <div>
                {starrate.moviePost ?
                    <img src={`${IMAGE_BASE_URL}w500${starrate.moviePost}`} /> : 'no image'
            }
            </div>
        )
        return <tr key={index}>
            <Popover content={content} title={`${starrate.movieTitle}`}>
                <td><a href={`/movie/${starrate.movieId}`}>{starrate.movieTitle}</a></td>
            </Popover>
            <td>{starrate.movieRunTime} 분</td>
            <td>
                <Starrate 
                    movieInfo={starrate}
                    movieId={starrate.movieId}
                    userFrom={localStorage.getItem('userId')}
                />
            </td>
        </tr>
    })

    return (
        <div style= {{ width: '85%', margin: '3rem auto'}}>
            <h2>별점 준 영화</h2> 
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>영화 제목</th>
                        <th>상영 시간</th>
                        <th>별점</th>
                    </tr>
                </thead>
                <tbody>

                    {renderCards}

                </tbody>
            </table>
        </div>
    )
}

export default StarRatePage
