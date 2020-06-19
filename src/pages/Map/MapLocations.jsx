import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const MapLocations = () => {
  return (
    <Fragment>
      <h4 className='heading'>Map</h4>
      <div className='one'>
        <Link to='/map/town'>Town</Link>
      </div>
      <div className='one'>
        <h5>Farm</h5>
      </div>
      <div className='one'>
        <h5>Abandaoned Castle</h5>
      </div>
    </Fragment>
  );
};

export default MapLocations;
