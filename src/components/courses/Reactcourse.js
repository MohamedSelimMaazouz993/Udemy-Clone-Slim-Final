import React from 'react'
import Footer from '../Footer'
import Naavbar from '../signin/components/Naavbar'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Reactt from './videos/Reactt.mp4'

function Reactcourse() {
  return (
    <>
    <Naavbar/>
    <div className='left2'>
   <h2> React Crash Course 2022</h2>
   <Video autoPlay loop
   onCanPlayThrough={()=>
    {  console.log('video played') }
  }
   > 
    <source src={Reactt} type="video/webm" />

   </Video>
   </div>
    <Footer/>

    </>
  )
}

export default Reactcourse