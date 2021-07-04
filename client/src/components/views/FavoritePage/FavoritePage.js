import React,{useEffect} from 'react'
import Axios from 'axios'
import './favorite.css'

function FavoritePage() {

    useEffect(() => {
        Axios.post('/api/favorite/getFavoriteMovie', {userFrom : localStorage.getItem('userId')})
        .then(response => {
            console.log(response.data)
            if(response.data.success) {
                
            } else {
                alert('좋아요 한 영화들를 못가져왔습니다!!')
            }
        })


    }, [])  

    return (
        <div style= {{ width: '85%', margin: '3rem auto'}}>
            <h2>FavoritePage</h2> 
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Movie RunTime</th>
                        <th>Remove from favorites</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default FavoritePage
