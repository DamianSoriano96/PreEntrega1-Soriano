import { Link, NavLink, useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartWidget/cartWidget';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
        <Link to='/' className='alert alert-success' >
            LowRiders
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <NavLink to="/categoria/gorras" className={ ({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary'} >Gorras</NavLink>
            <NavLink to='/categoria/remeras' className={ ({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>Remeras</NavLink>                   
        </Nav>
        <Nav>                    
            <Link to='/cart' >
                <CartWidget />
            </Link>
            
        </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }


export default NavBar;