import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import Home from './pages/Home'
import Post from './pages/Post'
import Create from './pages/Create'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route
              path="/:id"
              element={<Post />}
            />
            <Route
              path="/create"
              element={<Create />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
