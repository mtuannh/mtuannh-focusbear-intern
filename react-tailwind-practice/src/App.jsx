import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md p-4">
          <div className="flex justify-center gap-6">
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800"
            >
              Home
            </Link>

            <Link
              to="/profile"
              className="text-blue-600 hover:text-blue-800"
            >
              Profile
            </Link>
          </div>
        </nav>

        <main className="flex justify-center p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App