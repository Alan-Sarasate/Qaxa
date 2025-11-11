import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./pages/Login"

function App() {

  const navigate = useNavigate()

  function handleNavigate (path:string) {
    navigate(path ?? '/')
  }

  return (
    <section className="flex flex-row w-screen h-screen p-8">
      <Routes>
        <Route path={'/'} element={<Login/>}/>
        <Route path="/home" element={<div> Home </div>}/>
      </Routes> 
    </section>
  )
}

export default App
