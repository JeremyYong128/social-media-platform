import formatDateTime from "../utils/DateTimeFormatter"

const Comment = ({ post, comment, setPost }) => {

    const handleClick = async (e) => {
        
        const updatedComments = { comments: post.comments.filter((c) => ( comment._id !== c._id )) }

        const response = await fetch(`/posts/${post._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedComments)
        })
        const json = await response.json()

        if (response.ok) {
            setPost(json)
        }
    }

    return (
        <div className="comment-card">
            <div className="main-content">
                <h4 className="title">{ comment.author } </h4>
                <p className="text">{ comment.text } </p>
            </div>
            <div className="others">
                <p className="date-time">{ formatDateTime(comment.createdAt) }</p>
                <button onClick={handleClick} className="delete">Delete</button>
            </div>
        </div>
    )
}

export default Comment