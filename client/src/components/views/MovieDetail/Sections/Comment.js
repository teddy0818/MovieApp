import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux' // 리덕스에서 회원정보를 가져옴
import Axios from 'axios'

function Comment(props) {
    //방법 1.localStorage에서 가져오기 2.리덕스에 있는 state에서 가져오기
    const user = useSelector(state => state.user) // 리덕스 안에 있는 state 에서 정보가져옴
    // props 이용해서 가져오기. 
    const movieId = props.movieId

    const [commentValue, setcommentValue] = useState("")

    const handleClick = (event) => {
        setcommentValue(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        
        let variables = {
            content: commentValue,
            writer: user.userData._id,
            movieId
        }

        Axios.post('/api/comment/saveComment', variables)
        .then(response => {
            console.log(response.data)
            if(response.data.success) {
                
            } else {
                alert('댓글 쓰기 실패')
            }
        })

    }


    return (
        <div>
            <br />
            <p> Replies </p>
            <hr />


            {/* Comment Lists */}


            {/* Roote Comment form */}
            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <textarea
                    style={{ width: '100%', borderRadius: '5px'}}
                    onChange={handleClick}
                    value={commentValue}
                    placeholder="코멘트를 작성해주세요"
                />
                <br />
                <button style={{ width: '20%', height: '52px'}} onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Comment
