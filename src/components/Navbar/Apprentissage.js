import React from 'react'
import Footer from '../Footer';
import Naavbar from '../signin/components/Naavbar';
 function Apprentisage() {
  return (
    <>
    <Naavbar/>
    <div>
      <h1> Voici Vos Cours </h1>
      <div class="card-group">
      <div class="card">
        <img class="card-img-top" src="images/Web/frontend.jpg" alt="Frontend_Image" />
        <div class="card-body">
          <h5 class="card-title">Le Guide Complet de Frontend 2022 </h5>
          <p class="card-text">Le Guide Complet pour metriser Frontend.</p>
          
                    <div class="stars">
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star-o"></span>
                    </div>
                    <div class="progress">
  <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>


        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="images/Web/angular.jpg" alt="Angular_Image" />
        <div class="card-body">
          <h5 class="card-title">Le Guide Complet d'Angular 13 2022</h5>
          <p class="card-text">Le Guide Complet pour metriser Angular 13</p>
          
                    <div class="stars">
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star-o"></span>
                    </div>
        <div class="progress">
        <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
</div>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="images/Web/react.jpg" alt="React_Image"/>
        <div class="card-body">
          <h5 class="card-title">Le Guide Complet de React</h5>
          <p class="card-text">Le Guide Complet pour metriser React 18.</p>
          
                    <div class="stars">
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star-o"></span>
                    </div>
                    <div class="progress">
        <div class="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
</div>
        </div>
      </div>
    </div> 
      </div>
    <Footer/>
    </>
  )
}
export default  Apprentisage ;