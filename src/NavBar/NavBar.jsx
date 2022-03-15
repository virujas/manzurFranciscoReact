import {Container, Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">MI TIENDA</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Inicio</Nav.Link>
        <Nav.Link href="#action2">Ofertas</Nav.Link>
        <NavDropdown title="Tienda" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action5">
            Remeras
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Pantalones
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Polleras
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Vestidos
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Gorros
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Escribe tipo de prenda"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        
    )
}

export default NavBar