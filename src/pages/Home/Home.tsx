import { Button } from "../../components/ui/button"
import useAuth from "../../hooks/useAuth"
import Layout from "../Layout"

const Home = () => {

    const { logout } = useAuth()

    return (
        <Layout>
            <div>Testando home</div>
            <Button onClick={() => logout()}>Logout</Button>
        </Layout>
    )
}

export default Home