import {useState} from "react";

function Comments ({comment}) {
const [upVoteCount, setUpVoteCount] = useState(0)
const [downVoteCount, setDownVoteCount] = useState(0)
const [removeComment, setRemoveComment] = useState(false)

const onUpVoteClick = () => {
    setUpVoteCount(upVoteCount => (upVoteCount + 1))
} 
const onDownVoteClick = () => {
    setDownVoteCount(downVoteCount => (downVoteCount +1))
}

const onClickRemoveComment = (e) => {
setRemoveComment(removeComment => !removeComment)
console.log(removeComment)
}

// const handleRemoveComment = () => {}


    return (
    <div>
        { removeComment ?
        <div></div> :
        <div >
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
            <button onClick={onUpVoteClick} >{upVoteCount}👍</button>
            <button onClick={onDownVoteClick}>{downVoteCount}👎</button>
            <button onClick={onClickRemoveComment}>Remove Comment</button>
        </div> 
        }

    </div>
    )
}


export default Comments