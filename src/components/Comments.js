import {useState} from "react";

function Comments ({comments}) {
const [upVoteCount, setUpVoteCount] = useState(0)
const [downVoteCount, setDownVoteCount] = useState(0)
const onUpVoteClick = () => {
    setUpVoteCount(upVoteCount => (upVoteCount + 1))
} 

const onDownVoteClick = () => {
    setDownVoteCount(downVoteCount => (downVoteCount +1))
}


const renderComment = comments.map((comment) => {

    return (
        <div>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
        <button onClick={onUpVoteClick} >{upVoteCount}👍</button>
        <button onClick={onDownVoteClick}>{downVoteCount}👎</button>

        </div>
    )
})

    return (
    <div>
    {renderComment}
    </div>
    )
}


export default Comments