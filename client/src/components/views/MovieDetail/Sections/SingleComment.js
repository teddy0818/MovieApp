import React, {useEffect, useState} from 'react'
import { Comment, Avatar, Button, Input } from 'antd'
import { useSelector } from 'react-redux'
import Axios from 'axios'
import LikeDisLikes from './LikeDisLikes'
const TextArea = Input.TextArea;

function SingleComment(props) {
    const comment = props.comment
    const user = useSelector(state => state.user)
    const movieId = props.movieId

    const [OpenReply, setOpenReply] = useState(false)
    const [CommentValue, setCommentValue] = useState("")

    const toggleReply = () => {
        setOpenReply(!OpenReply)
    }

    const onHandleChange = (event) => {
        setCommentValue(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if(!localStorage.getItem('userId')) {
            alert('로그인이 필요한 서비스입니다')
            return
        } 
        let variables = {
            content: CommentValue,
            writer: user.userData._id,
            movieId,
            responseTo: comment._id//대댓글이니 이걸 넣어줘야함!! -> DB와 연결해서 가져와야함!
        }

        Axios.post('/api/comment/saveComment', variables)
        .then(response => {
            // console.log(response.data)
            if(response.data.success) {
                props.refreshFunction(response.data.result)
                setCommentValue('')
                setOpenReply(false)
            } else {
                alert('댓글 쓰기 실패')
            }
        })

    }

    // 배열형식으로 넣음
    const actions = [
        <LikeDisLikes
            movieId={movieId}
            userId={user}
            commentId={comment}
        />,
        <span style={{marginLeft : "5px"}} onClick={toggleReply} key="comment-basic-reply-to">답글 달기</span>
    ]

    return (
        <div>
            <Comment 
                actions={actions}
                author={props.comment.writer.name}
                // avatar={<Avatar src/>}
                content={props.comment.content}
            />
        

            {/* Roote Comment form */}
            {OpenReply &&
            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <textarea
                    style={{ width: '100%', borderRadius: '5px'}}
                    onChange={onHandleChange}
                    value={CommentValue}
                    placeholder="코멘트를 작성해주세요"
                />
                <br />
                <br />
                <Button type="primary" style={{ width: '20%', height: '52px'}} onClick={onSubmit}>확인</Button>
            </form>
            }
        </div>
    )
}

export default SingleComment
