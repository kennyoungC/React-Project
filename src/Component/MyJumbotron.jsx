import { Button, Container } from "react-bootstrap"
import { Component } from "react"
import LatestRelease from "./LatestRelease"

// import Scifi from "../Data/Scifi.json"
// import Horror from "../Data/Horror.json"
// import Romance from "../Data/Romance.json"
// import Fantasy from "../Data/Fantasy.json"
// import History from "../Data/History.json"
// const genre = [Scifi, History, Horror, Romance, Fantasy]
class MyJumbotron extends Component {
  state = {
    value: 0,
  }
  render() {
    return (
      <>
        <div className="Jumbotron d-flex flex-column align-items-center justify-content-center">
          <Container>
            <div className="d-flex flex-column  align-items-center  text-center text-light">
              <h1>Welcome to kenneth Book Store </h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p className="d-flex gap-2">
                <Button
                  onClick={() => this.setState({ value: 0 })}
                  variant="primary"
                >
                  Horror
                </Button>
                <Button
                  onClick={() => this.setState({ value: 1 })}
                  variant="primary"
                >
                  Sci-Fi
                </Button>
                <Button
                  onClick={() => this.setState({ value: 2 })}
                  variant="primary"
                >
                  Romance
                </Button>
                <Button
                  onClick={() => this.setState({ value: 3 })}
                  variant="primary"
                >
                  Fantansy
                </Button>
                <Button
                  onClick={() => this.setState({ value: 4 })}
                  variant="primary"
                >
                  History
                </Button>
              </p>
            </div>
          </Container>
        </div>
        <div className="mt-5">
          <LatestRelease index={this.state.value} />
        </div>
      </>
    )
  }
}

export default MyJumbotron
