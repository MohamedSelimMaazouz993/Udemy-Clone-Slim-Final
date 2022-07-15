import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap'
import Frontend from './components/dev/Frontend';
import Promotion from './components/Promotion';
import Recommandation from './components/Recommandation';





const App = () => {
  return (
    <>    
    <Header/>
    <main className='py-3'>
    <Container>
      <Promotion/>
      <Frontend/>
      <Container>
      <Recommandation/>
      </Container>
    </Container>  
    </main>
    <Footer/>
    </>

  )
}


export default App;
