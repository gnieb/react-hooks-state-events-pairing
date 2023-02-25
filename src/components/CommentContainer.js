import Comments from "./Comments";
import {useState} from "react"

function CommentContainer ({comments}) {

    const [searchQuery, setSearchQuery] = useState("")
    const [sortComments, setSortComments] = useState("")

    const toggleSort = string => setSortComments(string)
    const handleSort = (e) => {
		toggleSort(e.target.value)
	}

    const sortByUsername = (user1, user2) => {
        if (user1.user< user2.user) {
            return -1
        } else {
            return 1
        }
    }

    const handleSearchChange = (e) => (setSearchQuery(e.target.value))


    const searchResults = comments.filter(comment => {
        return comment.user.toLowerCase().includes((searchQuery).toLowerCase()) 
    })

    const sortedComments = [...searchResults].sort(sortByUsername)
    const renderComments = sortedComments.map(comment => <Comments comment={comment}/>)

    return (
    <div>
        <h2>Comments</h2>
        <select onChange={handleSort}>
            <option></option>
            <option value="username">Username</option>
        </select>

        <input name="search"
        placeholder="Search..."
        onChange={handleSearchChange}>
        </input>
        {renderComments}
    </div>
    )
}


export default CommentContainer;