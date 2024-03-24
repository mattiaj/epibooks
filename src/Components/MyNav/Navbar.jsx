import { useState, useContext } from 'react';
import {Container, Nav, Navbar, Form, Button} from 'react-bootstrap';
import { themeContext } from '../../context/ThemeContextProvider';

export default function NavBar({setInput}) {

const [search, setSearch] = useState("");
const {theme, setTheme} = useContext(themeContext);


  return (
    <Navbar expand="lg" bg={theme} data-bs-theme={theme} variant={theme} className='border-bottom shadow-sm'>
      <Container>
        <Navbar.Brand href="#">EPIBOOKS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <Form className='ms-auto'>
            <Form.Group className='d-flex'>
              <Form.Control 
              className='text-center search'
              type="text" 
              placeholder='Cerca il tuo libro...'
              value={search} 
              onChange={(e)=> setSearch(e.target.value)}/>
              <Button variant="outline-primary" size="md" onClick={() => setInput(search)}>Cerca</Button>
            </Form.Group>
          </Form>
          <Button className='ms-auto' onClick={() => setTheme(theme === "dark" ? "light" : "dark")} >Cambia tema</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

