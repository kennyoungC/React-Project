import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyFooter from "./Component/MyFooter"
import MyNavbar from "./Component/MyNavbar"
import LatestRelease from "./Component/LatestRelease"
import { Container } from "react-bootstrap"
import MyJumbotron from "./Component/MyJumbotron"
function App() {
  return (
    <div>
      <MyNavbar />
      <MyJumbotron />
      <LatestRelease />
      <MyFooter />
    </div>
  )
}

export default App
