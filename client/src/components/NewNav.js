import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import React, {useState} from 'react';

function NewNav() {
    const [searchValue, setSearchValue] = useState("");

    function handleSearchButtonClick(){
        async function search(){
          try{
            await axios.get("/api/");
          } catch (error) {
            console.error("Invalid username or password");
          }
        }
        search();
      };
      
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/home">BookShare</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/post">Post</Nav.Link>
                        <Nav.Link href="/request">Request</Nav.Link>
                        <Nav.Link href="/my-account">My Account</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <Nav.Link href="/settings">Settings</Nav.Link>
                        <Nav.Link href="/logout">Logout</Nav.Link>
                    </Nav>
                    <Form className="d-flex" >
                        <Form.Control
                            type="search"
                            placeholder="Find a book..."
                            className="me-2"
                            aria-label="Search"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <Button variant="outline-success" onClick={handleSearchButtonClick}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NewNav;