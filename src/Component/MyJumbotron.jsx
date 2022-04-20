import { Button, Container } from "react-bootstrap"
const MyJumbotron = () => (
  <div className="Jumbotron d-flex align-items-center">
    <Container>
      <div className="d-flex flex-column  align-items-center text-center text-light">
        <h1>Welcome to kenneth Book Store</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p className="">
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
    </Container>
  </div>
)

export default MyJumbotron
