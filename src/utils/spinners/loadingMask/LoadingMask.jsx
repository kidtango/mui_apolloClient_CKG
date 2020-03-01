import React from 'react';

import './loadingMask.css';
import irisLogo from '../../../assets/production/irisLoader.png';

const LoadingMask = ({ show }) => {
  return (
    <div className='LoadingMask' style={{ display: show ? 'block' : 'none' }}>
      <div className='loadingIndicator'>
        <img className='spinner' src={irisLogo} alt='' />
        <div className='loadingStatusText'>Reasoning</div>
      </div>
    </div>
  );
};

export default LoadingMask;
