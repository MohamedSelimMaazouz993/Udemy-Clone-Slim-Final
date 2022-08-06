import React from 'react'
import Footer from '../Footer'
import Naavbar from '../signin/components/Naavbar'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Front from './videos/Frontend.mp4'

function Frontcourse() {
  return (
    <>
    <Naavbar/>
    <div className='left2'>
   <h2> Front Crash Course 2022</h2>
   <Video autoPlay loop
   onCanPlayThrough={()=>
    {  console.log('video played') } } > 
    <source src={Front} type="video/webm" />
   </Video>
   </div>
    <hr />
   <h4> À propos de ce cours </h4>
   <div> Get started as a front-end web developer using HTML, CSS, JavaScript, jQuery, and Bootstrap! </div>
    <hr/>
    
    <div className='enchiffre'>    <h4 >En chiffres </h4> 
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
    <ul> <p>If you would like to get started as a front-end web developer, you are going to LOVE <br />
       this course! Work on projects ranging from a simple HTML page to a complete  <br />
       JavaScript based Google Chrome extension. We will cover the following <br />
        technologies in this course:</p>
      <li>Web development basics with HTML</li>
      <li> Cascading Style Sheets (CSS) </li>
      <li> JavaScript programming  </li>
      <li> jQuery JavaScript library </li>
      <li> Bootstrap framework </li>
    </ul>
   
<ul> 
   <div> We will work on 3 class projects throughout this course: </div> 
<p><strong> Simple text site -</strong>   
We will use what we learned in the HTML sections to create <br />
a simple text site. This project will help you learn HTML structure and the essential <br />
elements. 
</p>
<p><strong> Fallout inspired Pip-Boy -</strong>   
We will take what we learned in the CSS and Bootstrap <br />
sections of the course to code a Pip-Boy from the game Fallout. This project will <br/>
help you learn the design elements of modern web development.
</p>
<p><strong> Google Chrome Extension </strong>   
We will finish the course by programming a JavaScript <br />
based Google Chrome extension. This project will help you understand the logical <br />
parts of web development. <br />
This course covers the most popular web development frameworks, and will get you <br />
started on your path towards becoming a full-stack web developer! <br />
Still not sold? Check out a few of the awesome reviews this course has received! <br />
"Excellent Course! Highly Recommend It! Such a great hands on experience with this course." <br />
"Very nice course, covers all the stuff you need, good voice and good explanation  <br />
makes it perfect for people that are new to HTML. Also there's some best practices <br />
 recommendations which are useful even for advanced developers." <br />
"Excellence in giving the optimal set of tools for web development beginners <br />
seeking a well-rounded start for professional web development." <br />
Thank you for taking the time to read this, and we hope to see you in the course ! <br />
</p>
</ul>
<ul>  <strong> Ce que vous allez apprendre </strong>
  <li>   Build a simple HTML text site </li>
  <li> Style web pages using CSS  </li>
  <li> Program websites with JavaScript </li>
  <li> Build a Pipboy using Bootstrap </li>
  <li> Build and publish a Google Chrome Extension </li>
</ul>
<ul>  <strong> Y a-t-il des exigences ou prérequis pour ce cours ? </strong>
  <li> No previous development experience required </li>
  <li> Access to various open-source (free) software.  </li>
</ul>
<ul>  <strong> À qui ce cours s'adresse-t-il ? </strong>
  <li> Anyone who would like to learn front-end web development </li>
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

export default Frontcourse