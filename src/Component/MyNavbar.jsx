import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
const MyNavbar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container fluid>
      <Navbar.Brand href="#home">KEN-Book-Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <NavDropdown title="Books Genre" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">Browse</NavDropdown.Item>
            <NavDropdown.Item href="#">Sci-Fi</NavDropdown.Item>
            <NavDropdown.Item href="#">History</NavDropdown.Item>
            <NavDropdown.Item href="#">Horror</NavDropdown.Item>
            <NavDropdown.Item href="#">Fantasy</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Romance</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
export default MyNavbar
