import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Link from 'next/link';

const HomeNav = ({ currentUser }) => {
    const links = [
        !currentUser && { label: 'Sign In', href: '/auth/signin' },
        currentUser  &&  { label: 'Sign Out', href: '/auth/signout' }
    ]
        .filter(linkConfig => linkConfig)
        .map(({ label, href }) => {
            return <li key={href}>
                <Link href={href}>
                    <a>{label}</a>
                </Link>
            </li>
        })   

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
        <Container>
        <Nav className="me-auto">
                <Navbar.Brand href="/">woolfolk</Navbar.Brand>
            </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>

            <Nav className="me-auto">
            {/* <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Dank memes
            </Nav.Link> */}
            <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            </Form>
            </Nav>

            <Nav >
              {/* {currentUser ? currentUser.email : null} */}
            {links}  
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
};

export default HomeNav;