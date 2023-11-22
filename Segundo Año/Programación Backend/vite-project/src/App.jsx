import { useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { Profile } from './pages/Profile'
import { Admin } from './pages/Admin'
import { ProtectedRoute } from './components/ProtectedRoutes'
import { Login } from './pages/login'

function App(){
  const [usuario,setUsuario] = useState(null);
  const login = () => {
    setUsuario({
      id:12,
      usuario:'Messi',
      roles:["admin"]
    })
  }
  const logout = () => {
    setUsuario(null);
  }
  return (
    <BrowserRouter>
    <Navigation/>
    {
      usuario ? (
        <button onClick={logout}>Logout</button>
      ):(
        <button onClick={login}>LogIn</button>
      )
    }
      <Routes>
        <Router>
          <Route element={<ProtectedRoute usuario = {usuario}/>}>
            <Route path="/dashboard" element={< Dashboard/>}/>
            <Route path="/profile" element={< Profile/>}/>
            <Route path="/admin" element={
              <ProtectedRoute logueado = {!!usuario && usuario.roles.includes("admin")} redirecTo="/dashboard">
              <Admin />
            </ProtectedRoute>
            }/>
          </Route>
          <Route path="/" element={< Home/>}/>
        </Router>
      </Routes>
    </BrowserRouter>
  )
}

function Navigation(){
  return(
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  )
}
export default App
