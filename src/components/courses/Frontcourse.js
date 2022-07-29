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
    {  console.log('video played') }
  }
   > 
    <source src={Front} type="video/webm" />

   </Video>
   </div>
    <Footer/>

    </>
    


  )
}

export default Frontcourse