import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux' // 리덕스에서 회원정보를 가져옴
import Axios from 'axios'
import SingleComment from './SingleComment'
import ReplyComment from './ReplyComment'
import {Button} from "antd";

function Comment(props) {
    //방법 1.localStorage에서 가져오기 2.리덕스에 있는 state에서 가져오기
    const user = useSelector(state => state.user) // 리덕스 안에 있는 state 에서 정보가져옴
    // props 이용해서 가져오기. 
    const movieId = props.movieId
    const commentList = props.commentList

    const [commentValue, setCommentValue] = useState("")

    const handleClick = (event) => {
        setCommentValue(event.currentTarget.value)
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
                props.refreshFunction(response.data.result)
                setCommentValue('')
            } else {
                alert('댓글 쓰기 실패')
            }
        })
    }


    return (
        <div>
            <br />
            <p> 댓글 </p>
            <hr />


            {/* Comment Lists */}
            {commentList &&
                    commentList.map((comment, index) => (
                        (!comment.responseTo && 
                            <React.Fragment key={index}> 
                                <SingleComment
                                    movieId={movieId}
                                    comment={comment}
                                    refreshFunction={props.refreshFunction}
                                />
                                <ReplyComment
                                    movieId={movieId}
                                    commentList={commentList}
                                    parentCommentId={comment._id}
                                    refreshFunction={props.refreshFunction}
                                />
                            </React.Fragment>
                        )
                    ))
            }
            <br />
            {/* Roote Comment form */}
            <form style={{ display: 'flex'}} onSubmit={onSubmit}>
                <textarea
                    style={{ width: '100%', borderRadius: '5px'}}
                    onChange={handleClick}
                    value={commentValue}
                    placeholder="코멘트를 작성해주세요"
                />
                <br />
                <Button type="primary" style={{ width: '20%', height: '52px'}} onClick={onSubmit}>확인</Button>
            </form>
        </div>
    )
}

export default Comment
