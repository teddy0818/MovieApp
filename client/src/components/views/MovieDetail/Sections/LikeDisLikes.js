
import React, {useEffect, useState} from 'react'
import {Tooltip, Icon} from 'antd'

function LikeDisLikes() {
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
