import Scifi from "../Data/Scifi.json"
import Horror from "../Data/Horror.json"
import Romance from "../Data/Romance.json"
import Fantasy from "../Data/Fantasy.json"
import History from "../Data/History.json"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
const LatestRelease = (props) => (
  <Container>
    <Row>
      {Horror.map((book, i) => (
        <Col md={3} key={i}>
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
