
import './App.css';

import Banner from './components/Banner';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {


  
  
  return (
   <>

      


       <Navbar/>
       <Home/>
       <Banner text="About"/>
       <About/>

       <Banner text="Project"/>
 
         <Projects/>

{/*        <Banner text="Contact"/> */}
       <Contact/>
       <Footer text="Built & Designed by Darwin Ramos"/>
   </>
  );
}
export default App;
