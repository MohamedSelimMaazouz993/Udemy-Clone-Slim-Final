import React from 'react'
import Footer from '../Footer'
import Naavbar from '../signin/components/Naavbar'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import angular from './videos/Angular.mp4'

function Angularcourse() {
  return (
    <>
    <Naavbar/>
    <div className='left2'>
   <h2> Angular Crash Course 2022</h2>
   <Video autoPlay loop
   onCanPlayThrough={()=>
    {  console.log('video played') }
  }
   > 
    <source src={angular} type="video/webm" />

   </Video>
   </div>
    <Footer/>

    </>
  )
}

export default Angularcourse