import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function Favorite(props) {

    const userFrom = props.userFrom
    const movieId = props.movieId
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)


    useEffect(() => {

        let variables = {

            userFrom,
            movieId

        }

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

    return (
        <div>
            <button>{Favorited ? 'Not Favorite' : 'Add to Favortie'} {FavoriteNumber}</button>
        </div>
    )
}

export default Favorite
