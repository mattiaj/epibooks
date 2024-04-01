import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { themeContext } from '../../context/ThemeContextProvider';
import {Container, Nav, Navbar, Form, Button} from 'react-bootstrap';
import { FaRegSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";



export default function NavBar({setInput}) {

const [search, setSearch] = useState("");
const {theme, setTheme} = useContext(themeContext);
const navigate = useNavigate();

function searchHome() {
  navigate('/')
  setInput(search)
}

function backHome() {
  setInput("");
  navigate('/')
}


  return (
    <Navbar expand="lg" bg={theme} data-bs-theme={theme} variant={theme} className='border-bottom shadow-sm'>
      <Container>
        <Navbar.Brand href="#">EPIBOOKS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link onClick={backHome}>Home</Nav.Link>
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
              <Button variant="outline-primary" size="md" onClick={searchHome}>Cerca</Button>
            </Form.Group>
          </Form>
          <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={theme === "dark" ? "d-none" : "bg-dark border-0 ms-auto"}><FaRegSun /></Button>
          <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={theme === "dark" ? "bg-dark border-0 ms-auto" : "d-none"}><BsFillMoonStarsFill /></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

