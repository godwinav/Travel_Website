import React,{Components,useEffect} from 'react'
import NavBar from './NavBar'
import Aos from 'aos'
import 'aos/dist/aos.css';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import './App.css'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Packages from '../Pages/Packages'
import Footer from './Footer'
import Tours from '../Pages/Tours';
import About from '../Pages/About';
import ScrollToTop from '../Components/ScrollToTop';






// In order to avoid having a blank page on redirecting to an external page,
// You must set the COMPONENT of the redirected path to a different COMPONET

const App =()=>{
    useEffect(() => {
        Aos.init({duration:2000})
    }, [])
    
    return(<div>
        <Router>
            <NavBar/>
            <ScrollToTop/>
        <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/Contact' exact component={Contact}/>
         <Route path='/Packages' exact component={Packages}/>
          <Route path='/Tours' exact component={Tours}/>
          <Route path='/About' exact component={About}/>
        </Switch>
        <Footer/>
        </Router>
       
          
    </div>
  
    )
}
export default App;