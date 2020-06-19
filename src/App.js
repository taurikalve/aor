import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import UserContext from './context/UserContext';

import Header from './components/Header/Header';
import Backpack from './components/Backpack/Backpack';

import Workshop from './pages/Workshop/Workshop';
import Inventory from './pages/Inventory/Inventory';
import Map from './pages/Map/Map';
import Welcome from './pages/Welcome/Welcome';

function App() {
  return (
    <div className='App'>
      <UserContext.Provider>
        <Header />
        <div className='content'>
          <div className='main'>
            <Switch>
              <Route exact path='/' component={Welcome} />
              <Route path='/map' component={Map} />
              <Route exact path='/workshop' component={Workshop} />
              <Route exact path='/inventory' component={Inventory} />
            </Switch>
          </div>
          <div className='sidebar'>
            <Backpack />
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
