import './App.css';
import Navbar from './components/Navbar/Navbar';
import Routers from './routers/Routers';
import Footer from './components/Footer/Footer';

const App =() => (
  <div className='container'>

  <Navbar/>
  <Routers/>
  <Footer/>
  
  </div> 
  
  )

export default App;
