import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Card,
  Image
} from "react-bootstrap";

function App() {
  return (
    <section>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row className="pt-5">
            <Col xs={12} md={7}>
              <Image
                fluid
                src="https://dummyimage.com/900X400/dee2e6/6c757d.jpg"
                rounded
              />
            </Col>
            <Col xs={12} md={5}>
              <div className="mt-4">
                <h1>Cool Webpage</h1>
                <p className="mt-3">
                  this is my first react website, and here is my dummy text, i
                  still dont know how to use lorem in this code sand box but
                  anyways, i am really happy about what i have learnt so far
                </p>
                <Button variant="outline-secondary" className="me-3">
                  Click me
                </Button>
                <Button variant="dark">Click me</Button>
              </div>
            </Col>
          </Row>
          <Card className="text-center bg-secondary text-white my-5 py-4">
            the next part of my design starts at the other side of this card
          </Card>
          <Row>
            <Col xs={12} sm={6} md={3}>
              <Card>
                <Card.Img
                  variant="top"
                  src="data:image/jpeg;base64,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"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting This content is a
                    little bit longer.
                  </Card.Text>
                  <Button variant="dark"> Card</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Card>
                <Card.Img
                  variant="top"
                  src="data:image/jpeg;base64,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"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting This content is a
                    little bit longer.
                  </Card.Text>
                  <Button variant="dark"> Card</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Card>
                <Card.Img
                  variant="top"
                  src="data:image/jpeg;base64,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"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting This content is a
                    little bit longer.
                  </Card.Text>
                  <Button variant="dark"> Card</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Card>
                <Card.Img
                  variant="top"
                  src="data:image/jpeg;base64,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"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting This content is a
                    little bit longer.
                  </Card.Text>
                  <Button variant="dark"> Card</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="bg-dark py-4 mt-5">
        <p class="text-white text-center">copyright Prisca &copy; 2022</p>
      </footer>
    </section>
  );
}
export default App;
