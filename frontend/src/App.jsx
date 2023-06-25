import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './component/main';
import Login from './component/Login/login';
import Register from './component/Register/register';
import Todo from './component/todo/todo';
import Nav from './component/navigation/nav';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Router>
    
    <Routes>
    <Route path="/" Component={Main} />
    <Route path="login" Component={Login} />
    <Route path="register" Component={Register} />
    <Route path="dashboard" Component={Todo} />
    <Route path="nav" Component={Nav} />
    </Routes>
    </Router>
    </div>
  )
}

export default App
