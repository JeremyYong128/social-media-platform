import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>WEIChat</h1>
                </Link>
                <div className="right">
                    <Link to='/'>
                        <h2>All Posts</h2>
                    </Link>
                    <Link to='/create'>
                        <h2>New Post</h2>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar