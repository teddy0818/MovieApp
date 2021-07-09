
import React, {useEffect, useState} from 'react'
import {Tooltip, Icon} from 'antd'
import Axios from 'axios';

function LikeDisLikes(props) {
    
    const movieId = props.movieId
    
    let variables = {

    }

    if(props.commentId) {
        //댓글 좋아요

    } else {
        //영화 좋아요

    }

    const [LikeNum, setLikeNum] = useState(0)

    useEffect(() => {
        //좋아요 숫자 가져오기
        Axios.post('/api/like/getLikeNum', {movieId})
        .then(response => {
            console.log('likenum : ' + response.data.likesNum)
            if(response.data.success) {
                setLikeNum(response.data.likesNum)
            } else {
                alert('좋아요 수 가져오기 실패')
            }
        })

    }, [])


    return (
        <div>
            <span key="comment-basic-like">
                <Tooltip title="Like">
                    <Icon type="like"
                          theme="filled"
                           onClick=""
                    />

                </Tooltip>
                <span style={{ paddingLeft:'0px', cursor:'auto' }}> 1 </span>
            </span>

            <span key="comment-basic-dislike">
                <Tooltip title="Dislike">
                    <Icon type="dislike"
                          theme="outlined"
                           onClick=""
                    />

                </Tooltip>
                <span style={{ paddingLeft:'0px', cursor:'auto' }}> 1 </span>
            </span>
        </div>
    )
}

export default LikeDisLikes
