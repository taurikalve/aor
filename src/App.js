import React, { useState, useMemo } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Backpack from './components/Backpack/Backpack';

import Workshop from './pages/Workshop/Workshop';
import Inventory from './pages/Inventory/Inventory';
import Map from './pages/Map/Map';
import Welcome from './pages/Welcome/Welcome';

import { UserContext } from './context/UserContext';

function App() {
  const INITIAL_STATE = {
    name: 'X',
    gold: 0
  };
  const [user, setUser] = useState(INITIAL_STATE);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className='App'>
      <UserContext.Provider value={providerValue}>
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
