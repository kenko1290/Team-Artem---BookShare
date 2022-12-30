import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AuthButton from '../AuthButton';

function BookNavbar({displayLogout = true}) {
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
                        <Nav.Link href="/about-us">About</Nav.Link>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/post">Post</Nav.Link>
                        <Nav.Link href="/request">Request</Nav.Link>
                        <Nav.Link href="/my-account">My Account</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <Nav.Link href="/settings">Settings</Nav.Link>
                        {/* if logout is true, display Logout else display login*/}
                        {/* displayLogout && <Nav.Link href="/logout">Logout</Nav.Link>
                        !displayLogout && <Nav.Link href="/login">Login</Nav.Link> */}
                    </Nav>
                    <AuthButton/>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Find a book..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BookNavbar;