import React from 'react'
import Footer from '../Footer'
import Naavbar from '../signin/components/Naavbar'
import ReactPlayer from 'react-player'

function Angularcourse() {
  return (
    <>
    <Naavbar/>
   <h2> Angular Crash Course 2022</h2>
   <div className='player-wrapper'>
   <ReactPlayer
          className='react-player'
          url={[
              'https://www.youtube.com/watch?v=CEZMeHr-6wI',
              'https://www.youtube.com/watch?v=hQAQmwMiyAw',
              'https://www.youtube.com/watch?v=IHJVKJ-YeNI'
          ]}
          controls
          config={{
            youtube: {
              playerVars: { showinfo: 1 }
            },
            facebook: {
              appId: '12345'
            }
          }}
          width='90%'
          height='100%'
        />
      </div>
    
   <hr />
   <h4> À propos de ce cours </h4>
   <div> React en profondeur à partir de zéro. Apprends angular,Services , Router, HTML ,CSS, Authentification, BDD et bien plus ! </div>
    <hr/>
    
   <div className='enchiffre'> <h4 >En chiffres </h4> 
    <div className='leftdecription'>
    <div className='text-start'> Niveau de compétences: Tous les niveaux  </div> <br />
    <div className='text-start'> Participants: 424123 </div> <br />
    <div className='text-start'> Langues: Anglais </div> <br />
    <div className='rightdescription'>
    <div className='text-start' > Sous-titres: Oui  </div> <br />
    <div className='text-start'> leçons: 126  </div> <br />
    <div className='text-start'> Vidéo: 17 heures au total  </div> <br />
    </div>
    </div>
    </div>
    <hr />
    <h4>Certification</h4>
    <div> Si vous terminez le cours entier, vous obtenez un certificat Udemy </div>
    <button type="button" class="btn btn-primary btn-lg" href="/Certification"> Certification  </button>

    <hr />  
    <h4> Description </h4>
    <ul> 
   <div> <strong> Quels sont les avantages de cette formation ?</strong> </div> 
<p><strong> Avantage 1 : Le cours est entièrement orienté autour de projets réels</strong>   <br />
Tu ne vas pas apprendre React comme dans une salle de classe. Je mets un point d'honneur à proposer des formations qui s'articulent autour de projets concrets.
Tu vas créer 3 applications de A à Z. Dans un ordre de difficulté crescendo. Comme ça, même si tu es un peu effrayé par React tu auras le temps de l'apprivoiser à ton rythme.
Tu pourras ensuite créer tous les projets de sites ou d'applications qui te passent par la tête. 
</p>
<p><strong>  Avantage 2 : Tu vas apprendre bien plus que simplement coder en Angular </strong>  <br />  
Écrire des lignes de code c'est très bien, c'est la base. Mais ça ne suffit pas pour être complètement autonome sur tes projets.  <br />
C'est pourquoi on va aller beaucoup plus loin que simplement coder. Ça inclut de créer des animations, mettre en place une base de données,
créer un système d'authentification, gérer des routages d'URL, utiliser des lignes de commande, 
envoyer ton site sur un serveur web, coder avec les dernières fonctionnalités de JavaScript (ES6 et ES7)..
</p>
<p><strong> Avantage 3 : Dès que tu auras fini la formation tu auras en main 3 vraies applications </strong>   <br />
A la fin du cours tu auras 3 sites complets en ligne qui fonctionnent sur ordinateurs, tablettes et smartphones.  <br />
Bien sur je te fournis tous les fichiers sources que j'ai divisé étape par étape pour que tu puisses suivre encore plus facilement. <br />
parts of web development. <br />
Tu peux regarder la vidéo de présentation pour voir la démo des 3 projets que tu va créer. <br />
</p>
<p><strong>Avantage 4 : J'ai tout fait pour rendre angular so much fun </strong>   <br />
J'ai tourné plus de 300 tutoriels gratuits sur Youtube et j'ai appris à rendre un cours vivant.
 Non seulement on va coder côte à côte mais on va le faire en se faisant plaisir. <br />
 Toute la formation est structurée pour que tu progresses étape par étape
 même si tu es débutant (les plus avancés iront simplement plus vite).
</p>
<p><strong> Avantage 5 : Plusieurs sections théoriques </strong>   <br />
Des bases jusqu'au concepts avancés... On fait le point sur tout pour que tu puisses travailler 100% 
en autonomie à la suite du cours. Tu auras une vision globale de ce qu'il est possible
 de faire avec angular.
</p>
</ul>
<ul>  <strong> Avantage 6 : Toutes les nouveautés </strong>
  <li> Angular 13 </li>
  <li> Angular Routers</li>
  <li> ng new app</li>
  <li> context API </li>
  <li> Rest API </li>
  <li> Services </li>
  <li> Modules </li>
  <li> Binding </li>
  <li> ... </li> <br />
</ul>
<ul>  <strong> Y a-t-il des exigences ou prérequis pour ce cours ? </strong>
  <li> No previous development experience required </li>
  <li> Access to various open-source (free) software.  </li>
</ul>
<ul>  <strong> À qui ce cours s'adresse-t-il ? </strong>
  <li> Toutes les personnes qui souhaitent mettre à jour leurs compétences de développement front-end </li>
  <li> Développeurs JavaScript débutants ou experts (les experts iront simplement plus vite). </li>
  <li> Les utilisateurs de PHP et Wordpress qui veulent ajouter du dynamisme à leur site. </li>
  <li> Les utilisateurs d'autres frameworks (Vue, React, Ember, Backbone) curieux de comprendre le fonctionnement de React.js. </li>
  <li>Les développeurs jQuery qui veulent passer à la vitesse supérieure. </li>
  <li> De manière générale n'importe qui souhaitant booster ses compétences en JavaScript. </li>
</ul>

<hr />
<div>
  <h4>Formateur : </h4>
<img src="images/avatar.jpg" alt="Avatar" class="avatar"/>
<div className='avatar-description'> 
<div className='text-start'>
Joseph Delgadillo  <br />
Best-Selling Instructor 
  </div> 
</div>
<div className='formateur-description'>
<p>
The digital age is upon us. Would you like to build/protect the systems that shape <br />
our future? <br />
I am here on Udemy to produce valuable educational resources for students who <br />
wish to learn skills related to information technology, network security, <br />
programming languages and much more. Enroll in one of my courses for a practical, <br />
down to earth approach to learning.


</p>
</div>
</div>

   



    <Footer/>

    </>
  )
}

export default Angularcourse