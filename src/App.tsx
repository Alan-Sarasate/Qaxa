import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./pages/Login"
import RouterPaths from "./configs/routerPaths"
import ProtectedRoute from "./components/protectedRoute"

function App() {

  const navigate = useNavigate()

  return (
    <section className="flex flex-row w-screen h-screen p-8">
      <Routes>
        <Route path={RouterPaths?.loginPath ?? '/'} element={<Login/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path={RouterPaths?.homePath ?? '/'} element={<div> Home </div>} />
        </Route>
      </Routes> 
    </section>
  )
}

export default App
