import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import {Navbar,Nav,Container,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'






const Naavbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
     <header>
     <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
     <Container>
     <Nav className='left-navbar'>
     <div className='logo1'>
     <img src='/logo-udemy.svg'  width="100" height="45"  alt=""  />
      </div>
      
     
      <NavDropdown title="Categories" id="collasible-nav-dropdown">
        
        <NavDropdown.Item href="/dev">Dévellopement</NavDropdown.Item>
        <NavDropdown.Item href="/Business">Business</NavDropdown.Item>
        <NavDropdown.Item href="/FC">Finance et Comptabilité</NavDropdown.Item>
        <NavDropdown.Item href="/IEL">Informatique et Logiciel</NavDropdown.Item>
        <NavDropdown.Item href="/PB">Productivité bureautique</NavDropdown.Item>
        <NavDropdown.Item href="/DP">Devellopement Personnel</NavDropdown.Item>
        <NavDropdown.Item href="/Design">Design</NavDropdown.Item>
        <NavDropdown.Item href="/Marketing">Marketing</NavDropdown.Item>
        <NavDropdown.Item href="/MDV">Mode de vie</NavDropdown.Item>
        <NavDropdown.Item href="/PEV">Photographie et video</NavDropdown.Item>
        <NavDropdown.Item href="/SEB">Sante et bien-etre</NavDropdown.Item>
        <NavDropdown.Item href="/Musique">Musique</NavDropdown.Item>
        <NavDropdown.Item href="/FED">Formation et Diplome</NavDropdown.Item>
       </NavDropdown>




     < Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
              <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        
     </Nav>

 
                
      <Nav className='right-navbar'  >
    
      <Nav.Link href="/UdemyB">Udemy Business</Nav.Link>
      <Nav.Link href="/Enseigner">Enseigner Sur Udemy</Nav.Link>
      <Nav.Link href="/Apprentissage">Mon Apprentissage</Nav.Link>
      <Nav.Link href="Like">
      <i class="fa-regular fa-heart"></i>
        </Nav.Link>
      <Nav.Link  href="/Cart"> 
      <i className='fas fa-shopping-cart'></i> </Nav.Link>
      <Nav.Link  href="/notifications"> 
      <i className='fas fa-bell'></i></Nav.Link>
      
    <div className='flex justify-between bg-gray-200 w-full p-4'>
      
      {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Link to='/signin'>Sign in</Link>
      )}
    </div>
    </Nav>
   </Container>
   </Navbar>
  

    </header>


  );
};

export default Naavbar;
