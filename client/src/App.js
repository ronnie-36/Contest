import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Bookmarked from './components/pages/Bookmarked';
import Addedcontests from './components/pages/Addedcontests';
import Today from './components/contest/Today';
import Addcontest from './components/contest/Addcontest';
import Logintoadd from './components/contest/logintoadd';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AuthState from './context/auth/AuthState';
import ContestState from './context/contests/ContestState';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });
  return (
    <AuthState>
      <ContestState>
        <Router>
          <div className='grey darken-4 pt-10'>
            <div className='white-text text-6xl text-center  py-8 font-serif '>
              Contests for life
            </div>
            <Navbar />
            <Today />
            <Addcontest />
            <Logintoadd />
            <Switch>
              <Route exact path='/about' component={About} />
              <Route
                path='/privacy-policy'
                component={() => {
                  window.location.href =''
                  return null;
                }}
              />
              <Route exact path='/bookmarks' component={Bookmarked} />
              <Route exact path='/addedcontests' component={Addedcontests} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route path='/' component={Home} />
            </Switch>
          </div>
        </Router>
      </ContestState>
    </AuthState>
  );
};

export default App;
