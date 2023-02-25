



function Comments ({comments}) {

const renderComment = comments.map((comment) => {
    return (
        <div>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
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