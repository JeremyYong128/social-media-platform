import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'

const Home = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/posts/')
            const json = await response.json()

            if (response.ok) {
                setPosts(json)
            }
        }

        fetchPosts()
    }, [])

    return (
        <div className="home">
            <h2 className='page-title'>Home</h2>
            <div className='posts'>
                {posts && posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Home