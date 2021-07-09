
import React, {useEffect, useState} from 'react'
import {Tooltip, Icon} from 'antd'
import Axios from 'axios';
import { useSelector } from 'react-redux'

function LikeDisLikes(props) {
    
    const movieId = props.movieId
    const userId = localStorage.getItem('userId')
    
    let variables = {

    }

    if(props.commentId) {
        //댓글 좋아요

    } else {
        //영화 좋아요

    }

    const [LikeNum, setLikeNum] = useState(0)
    const [IsLike, setIsLike] = useState()
    
    const getLikeNum = () => {
        //좋아요 수 가져오기
        Axios.post('/api/like/getLikeNum', {movieId})
        .then(response => {
            // console.log('likenum : ' + response.data.likesNum)
            if(response.data.success) {
                setLikeNum(response.data.likesNum)
            } else {
                alert('좋아요 수 가져오기 실패')
            }
        })
    }
    
    const getIsLike = () => {
        //내가 한 좋아요 가져오기 
        Axios.post('/api/like/getMeLike', {movieId, userId})
        .then(response => {
            // console.log('likenum : ' + response.data.likesNum)
            if(response.data.success) {
                response.data.likesNum > 0 ? setIsLike(true) :  setIsLike(false)
            } else {
                alert('내가한 좋아요 여부 가져오기 실패')
            }
        })
    }

    useEffect(() => {
        getLikeNum()
        getIsLike()
    }, [])

    const onClickLike = () => {
        //좋아요 활성화
        Axios.post('/api/like/saveLike', {movieId, userId})
        .then(response => {
            console.log('saveLike : ' + response.data)
            if(response.data.success) {
                getLikeNum()
                getIsLike()
            } else {
                alert('좋아요 활성화 실패')
            }
        })
    }


    return (
        <div>
            <span key="comment-basic-like">
                <Tooltip title="Like">
                    <Icon type="like"
                          theme={`${IsLike ? 'filled' : 'outlined'}`}
                           onClick={onClickLike}
                    />

                </Tooltip>
                <span style={{ paddingLeft:'0px', cursor:'auto' }}> {LikeNum} </span>
            </span>

            <span key="comment-basic-dislike">
                <Tooltip title="Dislike">
                    <Icon type="dislike"
                          theme="outlined"
                           onClick=""
                    />

                </Tooltip>
                <span style={{ paddingLeft:'0px', cursor:'auto' }}>  </span>
            </span>
        </div>
    )
}

export default LikeDisLikes
