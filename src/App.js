import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/NavBar/Navbar';
import Home from './pages/Home';
import About from './pages/About'
import Profile from './pages/Profile';
import { Alert } from './components/Alert/Alert';
import { AlertState } from './Context/Alert/AlertState';
import { GithubState } from './Context/Github/GithubState';


function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
