import { Route, Routes } from "react-router-dom"
import Signup from "./Signup"
import './app.css'
import Login from "./Login"
import Home from "./Home"
import UserNotFound from "./UserNotFound"
import IncorrectPassword from "./IncorrectPassword"
function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/register" element={<Signup/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>} />
      <Route path="/NotFound" element={<UserNotFound/>}/>
      <Route path="/IncorrectPassword" element={<IncorrectPassword/>}/>
    </Routes>
   </div>
  )
}

export default App
