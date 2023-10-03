
'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";

import useUserStore from '../libs/store';
import { redirect,useRouter } from "next/navigation";


function NavBar() {
  const user = useUserStore() // get store
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Make a POST request to logout
      const response = await fetch('http://laravel.local:8081/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`, // Include the Bearer token here
        },
      });

      if (response.ok) {
        // If logout is successful, redirect to /login
        useUserStore.setState({ 
          token: null,
          email: null
         })
        router.push('/login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };



  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">NEXTJS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            

            { user.email ?
            <>
            <Link className="nav-link" href="/dashboard">Dashboard</Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </>
            :
              <Link className="nav-link" href="/">Home</Link>
            }
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='me-2'>
        
              { user.email ? 
              <>
                  Signed in as: <strong>{user.email}</strong>
                  {' '}
                  <button style={{ 'border': 'none'}} onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOut} />
                    {' '}
                    Logout
                  </button>
                            
              </>
              :
              <Link className="nav-link" href="/login"><FontAwesomeIcon icon={faSignIn} />{' '}Login</Link>
              }
          </Navbar.Text>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;