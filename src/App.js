import React from 'react'
import AboutUs from './pages/AboutsUs'
import GlobalStyle from './Compoenets/GlobalStyle'
import Nav from './Compoenets/Nav'
import OurWork from './pages/OurWork'
import ContactUs from './pages/ContactUs'  
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
       <GlobalStyle/>

      <Nav/>
      <Switch>
      <Route path="/" exact>
           <AboutUs/>
      </Route>
      
      <Route path="/work">
            <OurWork/>
      </Route>
      <Route path="/contact">
            <ContactUs/>
      </Route>
      </Switch>

    </div>
  );
}

export default App;
