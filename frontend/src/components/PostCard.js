import { Link } from 'react-router-dom'
import formatDateTime from '../utils/DateTimeFormatter'

const PostCard = ({ post }) => {

    const handleClick = async (e) => {
        e.preventDefault()

        await fetch(`/posts/${post._id}`, {
            method: "DELETE"
        })

        
        window.location.reload()

    }

    return (
        <Link to={`/${ post._id }`}>
            <div className='post-card'>
                <div className='main-content'>
                    <h2 className='title'>{ post.title }</h2>
                    <p className='author'>{ post.author }</p>
                </div>
                <div className="others">
                    <p className="date-time">{ formatDateTime(post.createdAt) }</p>
                    <button onClick={handleClick} className="delete">Delete</button>
                </div>
            </div>
        </Link>
    )
}

export default PostCard