import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyFooter from "./Component/MyFooter"
import MyNavbar from "./Component/MyNavbar"
import LatestRelease from "./Component/LatestRelease"
import MyJumbotron from "./Component/MyJumbotron"
function App() {
  return (
    <div>
      <MyNavbar />
      <MyJumbotron />
      {/* <LatestRelease genre={4} /> */}
      <MyFooter />
    </div>
  )
}

export default App
