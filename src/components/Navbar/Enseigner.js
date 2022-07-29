import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
 function Enseigner() {
  return (
    <>
    <Header/>
    <div className='teacher'>
      <img src='images/teacher.jpg'  width="1350"    alt=""  /> 
    </div>
    <div className='reasons'>
      <img src='images/reasons.jpg'  width="1350"    alt=""  /> 
    </div>
    <Footer/>
    </>
  )
}
export default Enseigner;