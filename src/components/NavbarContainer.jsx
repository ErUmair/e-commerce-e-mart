// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RiLoginBoxLine } from 'react-icons/ri';
import { FiUserPlus } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


function NavbarContainer() {

  const state = useSelector((state) => state.cartReducer);
  const [urlPath, setUrlPath] = useState(window.location.pathname);
  const [url, setUrl] = useState([
    {
      active: false,
      path: '/home'
    },
    {
      active: false,
      path: '/product'
    },
    {
      active: false,
      path: '/about'
    },
    {
      active: false,
      path: '/contact'
    }]);

  const [active, setActive] = useState(false);
  useEffect
    (() => {
      for (let i = 0; i < url.length; i++) {
        if (urlPath === (url[i].path)) {
          setUrl([
            ...url,
            { active: true }
          ]);
        } else {
          setUrl([
            ...url,
            { active: false }
          ]);
        }
      }
    }, [urlPath])

  return (
    <Navbar bg="light" expand="lg" className="py-3 shadow-sm bg-white">
      <Container>
        <Navbar.Brand to="#" className="fw-bold fs-4"><div className='logo'></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/home" className={"nav-link " + (active ? "active" : "")} >Home</NavLink>
            <NavLink to="/products" className={"nav-link " + (active ? "active" : "")}>Products</NavLink>
            <NavLink to="/about" className={"nav-link " + (active ? "active" : "")}>About</NavLink>
            <NavLink to="/contact" className={"nav-link " + (active ? "active" : "")}>Contact</NavLink>

          </Nav>
          <div className="d-flex">

            <NavLink to="/login" className="btn btn-outline-dark me-2"><RiLoginBoxLine className="mb-1 me-1" />Login</NavLink>
            <NavLink to="/register" className="btn btn-outline-dark me-2"><FiUserPlus className="mb-1 me-1" />Register</NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark me-2"><AiOutlineShoppingCart className="mb-1 me-1" />Cart ({state.length})</NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;