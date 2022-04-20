import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyFooter from "./Component/MyFooter"
import MyNavbar from "./Component/MyNavbar"
import LatestRelease from "./Component/LatestRelease"
import { Container } from "react-bootstrap"
function App() {
  return (
    <div>
      <MyNavbar />
      <Container className="my-3">
        <h1>Welcome to My Book Store</h1>
      </Container>
      <LatestRelease />
      <MyFooter />
    </div>
  )
}

export default App
