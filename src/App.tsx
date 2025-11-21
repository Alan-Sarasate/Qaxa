import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import RouterPaths from "./configs/routerPaths"
import { Button } from "./components/ui/button"
import useAuth from "./hooks/useAuth"
import ProtectedRoute from "./components/protectedRoute"

function App() {

  const { logout } = useAuth()

  return (
    <section className="flex flex-row w-screen h-screen p-8">
      <Routes>
        <Route path={RouterPaths?.loginPath ?? '/'} element={<Login/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path={RouterPaths?.homePath ?? '/home'} element={<div> <Button onClick={() => logout()}>Logout</Button></div>} />
        </Route>
      </Routes> 
    </section>
  )
}

export default App
