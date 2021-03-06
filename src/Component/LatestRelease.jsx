import Scifi from "../Data/Scifi.json"
import Horror from "../Data/Horror.json"
import Romance from "../Data/Romance.json"
import Fantasy from "../Data/Fantasy.json"
import History from "../Data/History.json"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
const genres = [Scifi, History, Horror, Romance, Fantasy]
const LatestRelease = (props) => (
  <Container>
    <Row>
      {genres[props.index].map((book, i) => (
        <Col sm={6} md={4} lg={3} key={i} className="mb-3">
          <Card>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text>{book.price}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
)
export default LatestRelease
