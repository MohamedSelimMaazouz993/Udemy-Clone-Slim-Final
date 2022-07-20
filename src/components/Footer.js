import React from 'react';
import {MDBFooter,MDBContainer,MDBCol,MDBRow} from 'mdb-react-ui-kit';


function Footer() {
  return (

    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>  
      
      <div className='Enseigner' >
        <div className='text-start'>
        <h5>Ayez un impact global  <button type="button" class="btn btn-secondary btn-lg"  href ="/Enseigner">Enseigner Sur Udemy     </button>     </h5> 
        <h6>Créez un cours vidéo en ligne, inspirez les participants du monde et gagnez de l'argent              </h6> 
        
        </div>
      </div>
        
       
       




      


      <div className='text-start'>
        Les meilleures entreprises choisissent Udemy Business 
        <img src='images/partners/nasdaq-light.svg'  width="100" height="45" hspace="20" alt=""           /> 
        <img src='images/partners/volkswagen-light.svg'  width="100" height="45"  hspace="20" alt=""           /> 
        <img src='images/partners/box-light.svg'  width="100" height="45" hspace="20"  alt=""           /> 
        <img src='images/partners/netapp-light.svg'  width="100" height="45" hspace="20" alt=""           /> 
        <img src='images/partners/eventbrite-light.svg'  width="100" height="45" hspace="20" alt=""           />     
      </div>  

       

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='Business' className='text-white'>
                    Udemy Bussiness
                  </a>
                </li>
                <li>
                  <a href='Enseigner' className='text-white'>
                    Enseigner Sur Udemy
                  </a>
                </li>
                <li>
                  <a href='/download' className='text-white'>
                    Télécharger l'application
                  </a>
                </li>
                <li>
                  <a href='/about' className='text-white'>
                   A propos d'Udemy
                  </a>
                </li>
                <li>
                  <a href='/contact' className='text-white'>
                    Contactez-Nous
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Carriéres
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Aide et support
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Affilié
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Investisseurs
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Conditions
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Politique de Confidentialité
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Paramétres Des Cookies
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Plan du Site
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Declaration d'accesibilité
                  </a>
                </li>
              </ul>
            </MDBCol>

            
          </MDBRow>
        </section>

      </MDBContainer>
      
      <div className='logo and Copyright' >
        <div className='text-start'><img src='/logo-udemy.svg'  width="100" height="35" hspace="20"  alt=""           /> </div>
        <div className='text-end'>© 2022 Udemy, Inc.</div>
      
      
      </div>
      
      
    </MDBFooter>
    
  )    
}
export default Footer ;