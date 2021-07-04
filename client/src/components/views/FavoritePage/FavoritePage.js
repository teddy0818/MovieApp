import React,{useEffect, useState} from 'react'
import Axios from 'axios'
import './favorite.css'
import { Popover } from 'antd'
import { API_URL, API_KEY, IMAGE_BASE_URL} from "../../Config";

function FavoritePage() {

    const [Favorties, setFavorties] = useState([])

    useEffect(() => {
        Axios.post('/api/favorite/getFavoriteMovie', {userFrom : localStorage.getItem('userId')})
        .then(response => {
            console.log(response.data)
            if(response.data.success) {
                setFavorties(response.data.favorites)
            } else {
                alert('좋아요 한 영화들를 못가져왔습니다!!')
            }
        })


    }, [])  

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
                <td>{favorite.movieTitle}</td>
            </Popover>
            <td>{favorite.movieRunTime}</td>
            <button>Remove</button>
        </tr>
    })

    return (
        <div style= {{ width: '85%', margin: '3rem auto'}}>
            <h2>FavoritePage</h2> 
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Movie RunTime</th>
                        <th>Remove from favorsites</th>
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
