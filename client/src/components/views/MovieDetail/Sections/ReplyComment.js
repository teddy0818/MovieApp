import React, {useEffect, useState} from 'react'
import SingleComment from './SingleComment'

function ReplyComment(props) {
    const commentList = props.commentList;

    const [childCommentNumber, setchildCommentNumber] = useState(0)
    const [OpenReplyComments, setOpenReplyComments] = useState(false)

    useEffect(() => {
        let commentNumber = 0; 
        commentList.map((comment, index) => {
            if(comment.responseTo === props.parentCommentId) {
                commentNumber++
            }
        })
        setchildCommentNumber(commentNumber);
    }, [commentList]) // commentList가 바뀔때마다 이부분을 다시한번 실행하라!

    const renderReplyComment = (parentCommentId) => (
        //  소괄호 말고 중괄호 쓰면 안됨. 중괄호는 리턴값이 있어야함
        commentList.map((comment, index) => (
            <React.Fragment key={index}> 
                {comment.responseTo == parentCommentId &&
                    <div style={{ width: '80%', margin: '40px'}}>
                        <SingleComment
                            movieId={props.movieId}
                            comment={comment}
                            refreshFunction={props.refreshFunction}
                        /> 
                        <ReplyComment
                            movieId={props.movieId}
                            commentList={commentList}
                            parentCommentId={comment._id}
                            refreshFunction={props.refreshFunction}
                        />
                    </div>
                }
            </React.Fragment>
        ))
    )

    const onHandleChange = () => {
        setOpenReplyComments(!OpenReplyComments)
    }

    return (
        <div>
            {childCommentNumber > 0 &&
                <p style={{ fontSize: '14px', margin: 0, color: 'gray' }} onClick={onHandleChange}>
                    답글 더 보기 ({childCommentNumber})
                </p>
            }

            {OpenReplyComments &&
                renderReplyComment(props.parentCommentId)
            }

        </div>
    )
}

export default ReplyComment
