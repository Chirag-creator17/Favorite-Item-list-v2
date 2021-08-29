import React, { useContext } from "react";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = (props) => {
  const { isAuthenticated, user, setIsAuthenticated, setUser } =
    useContext(AuthContext);

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };

  const unauthenticatedNavBar = () => {
    return (
      <>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      </>
    );
  };

  const authenticatedNavBar = () => {
    return (
      <>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/todos">Fruits</Nav.Link>
          <Nav.Link href="/todos1">Vegetables</Nav.Link>
          {/* {user.role === "admin" ? (
            <Nav.Link href="/admin">Admin</Nav.Link>
        ) : null} */}
        </Nav>
        <Nav>
          <button
            type="button"
            className="btn btn-link nav-item nav-link"
            onClick={onClickLogoutHandler}
          >
            Logout
          </button>
        </Nav>
      </>
    );
  };
  return (
    <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#">Favorite</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
