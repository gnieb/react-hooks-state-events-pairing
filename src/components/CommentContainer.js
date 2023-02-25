import Comments from "./Comments";

function CommentContainer ({comments}) {
    return (
    <div>
        <h2>Comments</h2>
        <Comments comments={comments} />
    </div>
    )
}

export default CommentContainer;