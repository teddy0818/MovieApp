import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Button } from 'antd'

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
            <Button onClick={onClickFavorite}>{Favorited ? 'Not Favorite' : 'Add to Favortie'} {FavoriteNumber}</Button>
        </div>
    )
}

export default Favorite
