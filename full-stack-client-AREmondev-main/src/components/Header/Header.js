import React, { useContext } from 'react'
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Col,
  Row,
  Tab,
} from 'react-bootstrap'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import './Header.css'
function Header() {
  let location = useLocation()
  const isAdminPage =
    location.pathname === '/admin' ||
    location.pathname === '/admin/' ||
    location.pathname === '/admin/manageProducts' ||
    location.pathname === '/admin/addProduct' ||
    location.pathname === '/admin/editProduct'
  console.log(isAdminPage)
  const { login, userName, handleLogOut } = useContext(AuthContext)
  console.log(userName)
  return isAdminPage ? (
    <div className="admin-header-area">
      <div className="adminNav" sm={3}>
        <div className="site-logo">
          <h3>
            <Link to="/">Modikhana</Link>
          </h3>
        </div>
        <ul className="admin-nav-menu">
          <li>
            <NavLink active to="/admin/manageProducts">
              Manage Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/addProduct">Add Product</NavLink>
          </li>
          <li>
            <NavLink to="/admin/editProduct">Edit Product</NavLink>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <header>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <div className="logo-area">
              <Link className="logo" to="/">
                Modikhana
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <div className="menu-area">
                <ul className="menu">
                  <li>
                    <Link className="link" to="/">
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link className="link" to="/order">
                      Order
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/admin">
                      Admin
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="#">
                      Contact
                    </Link>
                  </li>
                  {login ? (
                    <li>
                      <Link className="link" to="#">
                        {userName}
                      </Link>
                      <Link style={{ marginLeft: '15px' }}>
                        <Button onClick={handleLogOut} className="main-btn">
                          Logout
                        </Button>
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/login">
                        <Button className="main-btn">Login</Button>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}

export default Header
