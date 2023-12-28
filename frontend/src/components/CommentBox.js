import { useState } from 'react'

const CommentBox = ({ post, setPost }) => {

    const initialText = "Text"
    const initialAuthor = "Author"

    const [text, setText] = useState(initialText)
    const [author, setAuthor] = useState(initialAuthor)

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

        const comment = { text, author }
        const updatedComments = { comments: [...post.comments, comment]}

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
            setText(initialText)
            setAuthor(initialAuthor)
        }
    }

    return (
        <div className="comment-card">
            <form onSubmit={handleSubmit}>
                <label className='title'>Add a comment:</label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onFocus={handleInputFocus(setText, initialText)}
                    onBlur={handleInputBlur(setText, initialText)}
                />
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    onFocus={handleInputFocus(setAuthor, initialAuthor)}
                    onBlur={handleInputBlur(setAuthor, initialAuthor)}
                />
                <button type="submit">Comment</button>
            </form>
        </div>
    )
}

export default CommentBox