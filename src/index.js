import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './components/signin/context/AuthContext';

import Account from './components/signin/pages/Account';
import Signin from './components/signin/pages/Signin';





import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <BrowserRouter> 

  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/signin' element={<Signin />} />
    <Route
      path='/account'
      element={
        
          <Account />
        
      }
      />
  </Routes>
  </BrowserRouter>  
</AuthContextProvider>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
