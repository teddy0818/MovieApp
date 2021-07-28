
import React, {useEffect, useState} from 'react'
import {Tooltip, Icon} from 'antd'
import Axios from 'axios';
import { useSelector } from 'react-redux'

function LikeDisLikes(props) {
    
    const movieId = props.movieId
    const userId = localStorage.getItem('userId')
    const commentId = props.commentId
    let variables;

    if(commentId) {
        //댓글 좋아요
        variables = {
            commentId,
            userId
        }
        
    } else {
        //영화 좋아요
        variables = {
            movieId,
            userId
        }

    }

    const [LikeNum, setLikeNum] = useState(0)
    const [IsLike, setIsLike] = useState()
    const [DislikeNum, setDislikeNum] = useState(0)
    const [IsDislike, setIsDislike] = useState()
    
    const getLikeNum = () => {
        //좋아요 수 가져오기
        Axios.post('/api/like/getLikeNum', variables)
        .then(response => {
            // console.log('likenum : ' + response.data.likesNum)
            if(response.data.success) {
                setLikeNum(response.data.likesNum)
            } else {
                alert('좋아요 수 가져오기 실패')
            }
        })
    }

    const getdisLikeNum = () => {
        //싫어요 수 가져오기
        Axios.post('/api/dislike/getDisLikeNum', variables)
        .then(response => {
            // console.log('disLikenum : ' + response.data.dislikesNum)
            if(response.data.success) {
                setDislikeNum(response.data.dislikesNum)
            } else {
                alert('싫어요 수 가져오기 실패')
            }
        })
    }
    
    const getIsLike = () => {
        //내가 한 좋아요 가져오기 
        Axios.post('/api/like/getMeLike', variables)
        .then(response => {
            // console.log('likenum : ' + response.data.likesNum)
            if(response.data.success) {
                response.data.likesNum > 0 ? setIsLike(true) :  setIsLike(false)
            } else {
                alert('내가한 좋아요 여부 가져오기 실패')
            }
        })
    }

    const getIsDislike = () => {
        //내가 한 싫어요 가져오기 
        Axios.post('/api/dislike/getMeDislike', variables)
        .then(response => {
            // console.log('likenum : ' + response.data.likesNum)
            if(response.data.success) {
                response.data.dislikesNum > 0 ? setIsDislike(true) :  setIsDislike(false)
            } else {
                alert('내가한 싫어요 여부 가져오기 실패')
            }
        })
    }

    useEffect(() => {
        getLikeNum()
        getIsLike()
        getdisLikeNum()
        getIsDislike()
    }, [])

    const onClickLike = () => {
        if(!userId) {
            alert('로그인이 필요한 서비스입니다')
            return
        } 

        if(IsLike) {
            //좋아요 활성화 일때
            Axios.post('/api/like/removeLike', variables)
            .then(response => {
                // console.log('saveLike : ' + response.data)
                if(response.data.success) {
                    // getLikeNum()
                    // getIsLike()
                    setLikeNum(LikeNum-1)
                    setIsLike(!IsLike)

                } else {
                    alert('좋아요 비활성화 실패')
                }
            })
        } else {
            //좋아요 비활성화 일때
            Axios.post('/api/like/saveLike', variables)
            .then(response => {
                // console.log('saveLike : ' + response.data)
                if(response.data.success) {
                    // getLikeNum()
                    // getIsLike()
                    setLikeNum(LikeNum+1)
                    setIsLike(!IsLike)
                } else {
                    alert('좋아요 활성화 실패')
                }
            })
            // 싫어요 활성화일 때 비활성화 시키기
            if(IsDislike) {
                Axios.post('/api/dislike/removeDislike', variables)
                .then(response => {
                    // console.log('saveLike : ' + response.data)
                    if(response.data.success) {
                        // getdisLikeNum()
                        // getIsDislike()
                        setLikeNum(LikeNum+1)
                        setIsLike(!IsLike)
                        setDislikeNum(DislikeNum-1)
                        setIsDislike(!IsDislike)
                    } else {
                        alert('싫어요 비활성화 실패')
                    }
                })
            } 
        }
    }

    const onClickdisLike = () => {
        if(!userId) {
            alert('로그인이 필요한 서비스입니다')
            return
        } 
        
        if(IsDislike) {
            //싫어요 활성화 일때
            Axios.post('/api/dislike/removeDislike', variables)
            .then(response => {
                // console.log('saveLike : ' + response.data)
                if(response.data.success) {
                    // getdisLikeNum()
                    // getIsDislike()
                    setDislikeNum(DislikeNum-1)
                    setIsDislike(!IsDislike)
                } else {
                    alert('싫어요 비활성화 실패')
                }
            })
        } else {
            //싫어요 비활성화 일때
            Axios.post('/api/dislike/saveDislike', variables)
            .then(response => {
                // console.log('saveLike : ' + response.data)
                if(response.data.success) {
                    // getdisLikeNum()
                    // getIsDislike()
                    setDislikeNum(DislikeNum+1)
                    setIsDislike(!IsDislike)
                } else {
                    alert('싫어요 활성화 실패')
                }
            })
            // 좋아요 활성화일 때 비활성화 시키기
            if(IsLike) {
                Axios.post('/api/like/removeLike', variables)
                .then(response => {
                    // console.log('saveLike : ' + response.data)
                    if(response.data.success) {
                        // getLikeNum()
                        // getIsLike()
                        setLikeNum(LikeNum-1)
                        setIsLike(!IsLike)
                        setDislikeNum(DislikeNum+1)
                        setIsDislike(!IsDislike)
                    } else {
                        alert('좋아요 비활성화 실패')
                    }
                })
            } 
        }
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
                          theme={`${IsDislike ? 'filled' : 'outlined'}`}
                           onClick={onClickdisLike}
                    />

                </Tooltip>
                <span style={{ paddingLeft:'0px', cursor:'auto' }}> {DislikeNum} </span>
            </span>
        </div>
    )
}

export default LikeDisLikes
