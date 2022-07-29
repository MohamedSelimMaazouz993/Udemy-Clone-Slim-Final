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
import Apprentissage from './components/Navbar/Apprentissage';
import Like from './components/Navbar/Like'
import Cart from './components/Navbar/Cart'
import UdemyB from './components/Navbar/UdemyB'
import Enseigner from './components/Navbar/Enseigner'
import Angularcourse from './components/courses/Angularcourse';
import Frontcourse from './components/courses/Frontcourse';
import Reactcourse from './components/courses/Reactcourse';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <BrowserRouter> 

  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/signin' element={<Signin />} />
    <Route path='/UdemyB' element={<UdemyB/>} />
    <Route path='/Enseigner' element={<Enseigner />} />
    <Route path='/Apprentissage' element={<Apprentissage/>} />
    <Route path='/Like' element={< Like />} />
    <Route path='/Cart' element={<Cart />} />
    <Route path='/Angularcourse' element={<Angularcourse />} />
    <Route path='/Frontcourse' element={<Frontcourse />} />
    <Route path='/Reactcourse' element={<Reactcourse />} />
    <Route
      path='/account'
      element={ <Account />  }
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
