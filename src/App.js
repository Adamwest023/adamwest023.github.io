import React from 'react';
import { Route} from 'react-router-dom';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Success from './pages/Success'
import Rentals from './pages/Rentals'
import WebDev from './pages/WebDev'

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path='/' component={Home} />
      <Route path='/resume' component={Resume} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path="/webDev" component={WebDev} />
      <Route path='/contact' component={Contact} />
      <Route path='/success' component={Success} />
      <Route path='/rentals' component={Rentals} />
    </>
  );
}

export default App;
