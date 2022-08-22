import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer';
import Naavbar from '../components/Naavbar';

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    if (user != null) {
      navigate('/account');

    }
  }, [user , navigate]);

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
