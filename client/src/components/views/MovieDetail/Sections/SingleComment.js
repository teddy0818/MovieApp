import React, {useEffect, useState} from 'react'
import { Comment, Avatar, Button, Input } from 'antd'
const TextArea = Input.TextArea;

function SingleComment() {

    const [OpenReply, setOpenReply] = useState(false)

    const toggleReply = () => {
        setOpenReply(!OpenReply)
    }

    const actions = [
        <span onClick={toggleReply} key="comment-basic-reply-to">Reply to</span>
    ]
    

    return (
        <div>
            <Comment 
                actions={actions}
                author
                avatar={<Avatar src alt />}
                content
            />


            {/* Roote Comment form */}
            {OpenReply &&
            <form style={{ display: 'flex' }} onSubmit>
                <textarea
                    style={{ width: '100%', borderRadius: '5px'}}
                    onChange
                    value
                    placeholder="코멘트를 작성해주세요"
                />
                <br />
                <button style={{ width: '20%', height: '52px'}} onClick>Submit</button>
            </form>
            }
        </div>
    )
}

export default SingleComment
