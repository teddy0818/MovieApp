import React,{useEffect, useState} from 'react'
import Axios from 'axios'
import './favorite.css'
import { Popover, Button} from 'antd'
import { API_URL, API_KEY, IMAGE_BASE_URL} from "../../Config";

function FavoritePage() {

    const [Favorties, setFavorties] = useState([])

    useEffect(() => {
        Axios.post('/api/favorite/getFavoriteMovie', {userFrom : localStorage.getItem('userId')})
        .then(response => {
            // console.log(response.data)
            if(response.data.success) {
                setFavorties(response.data.favorites)
            } else {
                alert('좋아요 한 영화들를 못가져왔습니다!!')
            }
        })
    }, [])  

    const onClickDelFavorite = (movieId) => {
        // console.log('무비아디 : ' + movieId);
        Axios.post('/api/favorite/onClickDelFavorite', {
            movieId,
            userFrom:localStorage.getItem('userId')})
        .then(response => {
            // console.log(response.data)
            if(response.data.success) {
                reRenderCards()
            } else {
                alert('favortie 페이지에서 좋아요 제거 실패')
            }
        })
    }

    const renderCards = Favorties.map((favorite, index) => {
        const content = (
            <div>
                {favorite.moviePost ?
                    <img src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`} /> : 'no image'
            }
            </div>
        )
        return <tr key={index}>
            <Popover content={content} title={`${favorite.movieTitle}`}>
                <td><a href={`/movie/${favorite.movieId}`} style={{}}>{favorite.movieTitle}</a></td>
            </Popover>
            <td>{favorite.movieRunTime} 분</td>
            {/* <td><button onClick={ onClickRemoveFavorite(favorite.movieId) }>Remove</button></td> */}
            {/* 이렇게 안하면 클릭을해도 이상하게 함수가 자동적으로 실행됨 */}
            <td><Button type="primary" onClick={() => onClickDelFavorite(favorite.movieId)}>제거</Button></td>
        </tr>
    })

    // DB랑 연동해서 Favorties state 바꿔줌
    const reRenderCards = () => {
        Axios.post('/api/favorite/getFavoriteMovie', {userFrom : localStorage.getItem('userId')})
        .then(response => {
            // console.log(response.data)
            if(response.data.success) {
                setFavorties(response.data.favorites)
            } else {
                alert('좋아요 한 영화들를 못가져왔습니다!!')
            }
        })
    }

    return (
        <div style= {{ width: '85%', margin: '3rem auto'}}>
            <h2>즐겨찾기</h2> 
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>영화 제목</th>
                        <th>상영 시간</th>
                        <th>즐겨찾기 제거</th>
                    </tr>
                </thead>
                <tbody>

                    {renderCards}

                </tbody>
            </table>
        </div>
    )
}

export default FavoritePage
