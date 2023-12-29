import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comment from "../components/Comment"
import CommentBox from "../components/CommentBox"
import formatDateTime from '../utils/DateTimeFormatter'

const Post = () => {
    
    const { id } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`https://weichat.onrender.com/posts/${id}`)
            const json = await response.json()

            if (response.ok) {
                setPost(json)
            }
        }

        fetchPost()
    }, [id])



    return (
        <div className="post">
            <h2 className='page-title'>{ post && post.title }</h2>
            <p className='details'>{ post && post.author }, { post && formatDateTime(post.createdAt) }</p>
            <p className='body'>{ post && post.body }</p>
            <div className='comments'>
                { post && post.comments.map((comment) => (
                    <Comment key={comment._id} setPost={setPost} post={post} comment={comment} />
                ))}
                <CommentBox post={post} setPost={setPost}/>
            </div>
        </div>
    )
}

export default Post