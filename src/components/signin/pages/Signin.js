import React from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import Footer from '../../Footer';
import Naavbar from '../components/Naavbar';

const Signin = () => {
  const { googleSignIn } = UserAuth();
  

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div>
    <Naavbar/>    
    <container >  
     <div className='max-w-[240px] m-auto py-4'>
      
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </container>
    <Footer/>
    </div>
  );
};

export default Signin;
