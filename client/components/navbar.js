import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';

import { BsBag, BsPerson, BsBoxArrowInRight, BsGrid1X2 } from "react-icons/bs";
// import { BsPerson } from "react-icons/bs";
import style from '../styles/navbar.module.scss';

const HomeNav = ({ currentUser }) => {
    console.log('current user in nav ', currentUser)
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
                <Navbar.Brand href="/">woolfolk</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    {/* <NavDropdown title="Products" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                        <Nav.Link href="/products">Products</Nav.Link>
                        {/* <Nav.Link onClick={() => Router.push('/products')}>Products</Nav.Link> */}
                        <Nav.Link href="/locations">Locations</Nav.Link>
                        <Nav.Link href="/info">Info</Nav.Link>
                        <Nav.Link href="/story">Story</Nav.Link>
                    </Nav>
                    <Nav >
                    {/* <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link> */}
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className={style.search_box}
                                aria-label="Search"
                            />
                            {/* <Button variant="outline-success">Search</Button> */}
                            {/* {currentUser ? currentUser.email : null} */}
                            <Nav.Link href="/auth/signin"><BsBag className={style.nav_icon}/></Nav.Link>
                            {currentUser 
                                ? <Nav.Link href="/products/new"><BsGrid1X2 className={style.nav_icon}/></Nav.Link> 
                                : null 
                            }
                            {currentUser 
                                ? <Nav.Link href="/auth/signout"><BsBoxArrowInRight className={style.nav_icon}/></Nav.Link> 
                                : <Nav.Link href="/auth/signin"><BsPerson className={style.nav_icon}/></Nav.Link> 
                            }
                            
                            {/* {links} */}
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default HomeNav;