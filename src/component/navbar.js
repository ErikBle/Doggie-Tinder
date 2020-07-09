import React from "react";
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import AboutPage from "./pages/about";
import DiscoverPage from "./pages/search";
import TinderTime from "./pages/discover";

function NavBar() {
    return (
    <Router>
      <div>
        <nav className="nav">
            <Link to="/" className="nav-link">About Us
            </Link>  
            <Link to="/search" className="nav-link">Tinder Time
            </Link>  
            <Link to="/discover" className="nav-link">Discover Dogs
            </Link>  
        </nav>
        <Switch>
          <Route path="/discover">
            <DiscoverPage />
          </Route>
          <Route path="/search">
            <TinderTime />
          </Route>
          <Route path="/">
            <AboutPage />
          </Route>
        </Switch>
      </div>
    </Router>
    
    )
}

export default NavBar;