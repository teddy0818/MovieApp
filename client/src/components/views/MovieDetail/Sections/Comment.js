import React from 'react'

function Comment() {
    return (
        <div>
            <br />
            <p> Replies </p>
            <hr />


            {/* Comment Lists */}


            {/* Roote Comment form */}
            <form style={{ display: 'flex' }} onSubmit>
                <textarea
                    style={{ width: '100%', borderRadius: '5px'}}
                    onChange={handleClick}
                    value
                    placeholder="코멘트를 작성해주세요"
                />
                <br />
                <button style={{ width: '20%', height: '52px'}} onClick>Submit</button>
            </form>
        </div>
    )
}

export default Comment
