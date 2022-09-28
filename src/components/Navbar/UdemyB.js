import React from 'react'
import Footer from '../Footer';
import Header from '../Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

 function UdemyB() {
  return (<>
<Header/> 


<div class="parent">

<div className='left'>
<h1>Get your demo</h1>

<h6>See why leading organizations choose Udemy Business </h6>
<h6>as their destination for employee learning.
 In your demo, learn more about:</h6> 

       <h6> - Unlimited access to 16,000+ top courses selected from Udemy.com – anytime, on any device </h6> 
   
       <h6> - Fresh content taught by global instructors  </h6> 
       <h6>- Actionable learning insights and admin functionality</h6> 
   



       <h3>Trusted By :</h3>
       <div className='Top'>
        <img src='images/Udemyb/gofundme.png.webp'  width="100" height="45" hspace="30" alt=""           /> 
        <img src='images/partners/box-light.svg'  width="100" height="45" hspace="30"  alt=""           /> 
        <img src='images/Udemyb/Fender.png.webp'  width="100" height="45" hspace="30" alt=""           /> 
        </div>
        <div className='Bottom'>
        <img src='images/Udemyb/Aflac-1.png.webp'  width="100" height="45" hspace="30" alt=""           /> 
        <img src='images/partners/volkswagen-light.svg'  width="100" height="45"  hspace="30" alt=""           /> 
        <img src='images/Udemyb/Tata.TCS.png'  width="100" height="45" hspace="30" alt=""           />     
       </div>
     
      </div>  


<div className='right2'>

<Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Your First Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasiclastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Your Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasiccity">
        <Form.Label>City</Form.Label>
        <Form.Control type="name" placeholder="Enter Your City Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicZipcode">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="name" placeholder="Enter Your Zip Code" />
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</div>
</div>

<Footer/>
</>

)
}
export default UdemyB;