import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MapLocations from './MapLocations';
import Town from './Town/Town';

const Map = () => {
  return (
    <div className='map'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/map' component={MapLocations} />
          <Route exact path='/map/town' component={Town} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Map;
