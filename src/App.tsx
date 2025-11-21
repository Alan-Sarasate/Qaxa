import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import RouterPaths from "./configs/routerPaths"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./pages/Home/Home"

function App() {

  return (
    <section className="flex flex-row w-screen h-screen p-8">
      <Routes>
        <Route path={RouterPaths?.loginPath ?? '/'} element={<Login/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path={RouterPaths?.homePath ?? '/home'} element={<Home/>}/>
        </Route>
      </Routes> 
    </section>
  )
}

export default App
