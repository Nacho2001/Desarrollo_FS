import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Componentes
import NavBar from './components/NavBar';

// Paginas de App
import Home from './pages/Home';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Chat from './pages/Chat';
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </Router>
  )
}

export default App
