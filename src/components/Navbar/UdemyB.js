import React from 'react'
import Footer from '../Footer';
import Header from '../Header';

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


<div className='right'>
 <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationTooltip01">First name</label>
      <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required/>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltip02">Last name</label>
      <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required/>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltipUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          
        </div>
        <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required/>
        <div class="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationTooltip03">City</label>
      <input type="text" class="form-control" id="validationTooltip03" placeholder="City" required/>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip04">State</label>
      <input type="text" class="form-control" id="validationTooltip04" placeholder="State" required/>
      <div class="invalid-tooltip">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip05">Zip</label>
      <input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required/>
      <div class="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
 </form>
</div>  

</div>

<Footer/>
</>

)
}
export default UdemyB;