import { Button, Container } from "react-bootstrap"
import { Component } from "react"
import Scifi from "../Data/Scifi.json"
import Horror from "../Data/Horror.json"
import Romance from "../Data/Romance.json"
import Fantasy from "../Data/Fantasy.json"
import History from "../Data/History.json"
const genre = [Scifi, History, Horror, Romance, Fantasy]
class MyJumbotron extends Component {
  state = {
    value: null,
  }
  render() {
    return (
      <div className="Jumbotron d-flex align-items-center">
        <Container>
          <div className="d-flex flex-column  align-items-center text-center text-light">
            <h1>Welcome to kenneth Book Store</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p className="d-flex gap-2">
              <Button variant="primary">Horror</Button>
              <Button variant="primary">Sci-Fi</Button>
              <Button variant="primary">Romance</Button>
              <Button variant="primary">Fantansy</Button>
              <Button variant="primary">History</Button>
            </p>
          </div>
        </Container>
      </div>
    )
  }
}

export default MyJumbotron
