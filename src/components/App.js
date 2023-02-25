import video from "../data/video.js";
import DisplayVideo from "./DisplayVideo.js";
import {useState} from "react";
import CommentContainer from "./CommentContainer.js";

function App() {
  
  const [upVoteCount, setUpVoteCount] = useState(parseInt([video.upvotes], 10))
  const [downVoteCount, setDownVoteCount] = useState(parseInt([video.downvotes], 10))
  const [isShowComments, setIsShowComments] = useState(true)
  
  const onClickCommentButton = () => {
    setIsShowComments((isShowComments)=> !isShowComments)
  }



  const onUpVoteChange = () => {
    setUpVoteCount(upVoteCount + 1)
  } 

  const onDownVoteChange =() => {
    setDownVoteCount(downVoteCount + 1)
  }




  return (
    <div className="App">
      <DisplayVideo title={video.title} src={video.embedUrl} views={video.views} uploaded={video.createdAt}/>
      <button onClick={onUpVoteChange}>{upVoteCount} 👍</button>
      <button onClick={onDownVoteChange}>{downVoteCount} 👎</button>
      <br></br>
      <button onClick = {onClickCommentButton}>
        {isShowComments? "Hide Comments" : "Show Comments"}
      </button>
      {isShowComments ? 
      <CommentContainer comments={video.comments} /> :
      ""}
    </div>
  );
}

export default App;
