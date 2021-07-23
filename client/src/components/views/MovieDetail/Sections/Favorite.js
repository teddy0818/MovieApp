import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Button } from 'antd'
import star_img from "../../../../image/star.svg";
import unStar_img from "../../../../image/unStar.svg";
import { FaFileExcel } from 'react-icons/fa';

function Favorite(props) {

    const userFrom = props.userFrom
    const movieId = props.movieId
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)

    let variables = {
        userFrom,
        movieId,
        movieTitle,
        moviePost,
        movieRunTime
    }

    useEffect(() => {

        Axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                // console.log(response.data)
                if(response.data.success) {
                    setFavoriteNumber(response.data.favoriteNumber)
                } else {
                    alert('숫자 정보를 못가져왔습니다!!')
                }
            })

        Axios.post('/api/favorite/favorited', variables)
            .then(response => {
                // console.log(response.data)
                if(response.data.success) {
                    setFavorited(response.data.favorited)
                } else {
                    alert('정보를 가져오는데 실패했습니다')
                }
            })
      
    }, [])

    const onClickFavorite = () => {
        if(Favorited) {
            Axios.post('/api/favorite/removeFromFavorite', variables)
            .then(response => {
                // console.log(response.data)
                if(response.data.success) {
                    setFavorited(!Favorited)
                    setFavoriteNumber(FavoriteNumber-1)
                } else {
                    alert('좋아요 제거 실패')
                }
            })

        }else {
            Axios.post('/api/favorite/addToFavorite', variables)
            .then(response => {
                // console.log(response.data)
                if(response.data.success) {
                    setFavorited(!Favorited)
                    setFavoriteNumber(FavoriteNumber+1)
                } else {
                    alert('좋아요 추가 실패')
                }
            })
        }
    }

    return (
        <div>
            {/* <Button onClick={onClickFavorite}>{Favorited ? '{<img src="#">}' : '즐겨찾기 추가'} {FavoriteNumber}</Button> */}
            <Button style={{display: 'flex', justifyContent:'center', alignItems:'center'}} onClick={onClickFavorite}>{Favorited ?  <img src={star_img} style={{ width:"20px", height:"20px", marginRight:"5px"}} /> : <img src={unStar_img} style={{ width:"20px", height:"20px", marginRight:"5px"}} />} {FavoriteNumber}</Button>
        </div>
    )
}

export default Favorite
