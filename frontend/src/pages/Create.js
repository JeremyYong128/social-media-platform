import { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Create = () => {
    
    const navigate = useNavigate()
    
    const initialTitle = "Title"
    const initialAuthor = "Author"
    const initialBody = "Body"

    const [title, setTitle] = useState(initialTitle)
    const [author, setAuthor] = useState(initialAuthor)
    const [body, setBody] = useState(initialBody)
    
    const handleInputFocus = (setInputValue, initialValue) => {
        return (e) => {
            if (e.target.value === initialValue) {
                setInputValue('')
            }
        }
    }

    const handleInputBlur = (setInputValue, initialValue) => {
        return (e) => {
            if (!e.target.value) {
                setInputValue(initialValue)
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const post = { title, author, body }

        const response = await fetch(`https://weichat.onrender.com/posts/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })

        if (response.ok) {
            navigate('/')
        }
    }
    
    return (
        <div className="create">
            <h2 className='page-title'>New Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className="author"
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    onFocus={handleInputFocus(setAuthor, initialAuthor)}
                    onBlur={handleInputBlur(setAuthor, initialAuthor)}
                />
                <input
                    className="text"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onFocus={handleInputFocus(setTitle, initialTitle)}
                    onBlur={handleInputBlur(setTitle, initialTitle)}
                />
                <input
                    className="body"
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    onFocus={handleInputFocus(setBody, initialBody)}
                    onBlur={handleInputBlur(setBody, initialBody)}
                />
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default Create