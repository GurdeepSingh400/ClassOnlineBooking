import React from 'react';

import './App.css';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <main>
          <nav>
              <Link to="/addtobag">  <HeaderContainer /></Link>
            
          </nav>

          <Route path="/" exact component={HomeContainer} />
      
          <Route path="/addtobag" component={HeaderContainer} />

        </main>
      </Router>


      {/* <HeaderContainer />

      <HomeContainer /> */}
    </div>
  );
}

export default App;
