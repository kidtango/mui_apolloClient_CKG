import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';

import './riskMatrix.css';
import configureRiskBuckets from './configureRiskBuckets';
import matrixConfig from './matrixConfig';
import mapMatrix from './mapMatrix';

const filteredCompoundRisk = 31;

const generateRbClassesTemplate = () => {
  let newRbClasses = {};
  _.each(matrixConfig.matMapColors, (row, ridx) => {
    _.each(row, (col, cidx) => (newRbClasses[ridx + ',' + cidx] = ''));
  });
  return newRbClasses;
};

const RiskMatrix = () => {
  const [rbClasses, setRbClasses] = useState(generateRbClassesTemplate);

  const riskBuckets = configureRiskBuckets(riskBuckets);

  const mappedMatrix = mapMatrix(
    riskBuckets,
    matrixConfig.matrix3x3.matMapColors
  );

  const getFilledBucked = (severityIdx, likelihoodIdx) => {
    let emptyBucket = {
      risks: [],
      filteredNumberOfLowConfidenceRisks: 0,
      filteredAverageConfidenceLevel: 0
    };
    let mappedBucketKey = severityIdx + ',' + likelihoodIdx;
    let bucket = mappedMatrix[mappedBucketKey] || emptyBucket;

    let bucketColor = mappedMatrix[mappedBucketKey]
      ? mappedMatrix[mappedBucketKey].colorClass
      : matrixConfig.matMapColors[severityIdx][likelihoodIdx];

    return (
      <div
        key={mappedBucketKey}
        className={`${rbClasses[mappedBucketKey] ||
          ''} matrixCell ${bucketColor}`}
        // onClick={
        //   bucket.risks.length
        //     ? () => this.selectRiskBucket(severityIdx, likelihoodIdx)
        //     : () => {}
        // }
      >
        {bucket ? (
          <React.Fragment>
            {bucket.filteredNumberOfLowConfidenceRisks > 0 && (
              <div className='lowPresicion'>
                {bucket.filteredNumberOfLowConfidenceRisks}
              </div>
            )}
            <div className='ocurrences'>
              {bucket.filteredNumberOfRisks || 0}
            </div>
            <div className='certainity'>
              {bucket.filteredAverageConfidenceLevel || '0%'}
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className='ocurrences'>0</div>
            <div className='certainity'>0%</div>
          </React.Fragment>
        )}
      </div>
    );
  };

  return (
    <div className='riskMatrix'>
      <div>
        <div className='compoundRiskIndicator'>
          <div>Compound risk {filteredCompoundRisk}</div>
          <div
            className='triangle'
            style={{ left: filteredCompoundRisk }}
          ></div>
          <div className='bar'></div>
        </div>
        <br />
        <div className='riskMatrixChart'>
          <div className='severityTitle'>Severity</div>
          <Grid item xs={12} className='matrixRow'>
            <div className='rowTitle'>H</div>
            {getFilledBucked(2, 0)}
            {getFilledBucked(2, 1)}
            {getFilledBucked(2, 2)}
          </Grid>
          <Grid item xs={12} className='matrixRow'>
            <div className='rowTitle'>M</div>
            {getFilledBucked(1, 0)}
            {getFilledBucked(1, 1)}
            {getFilledBucked(1, 2)}
          </Grid>
          <Grid item xs={12} className='matrixRow'>
            <div className='rowTitle'>L</div>
            {getFilledBucked(0, 0)}
            {getFilledBucked(0, 1)}
            {getFilledBucked(0, 2)}
          </Grid>
          <Grid item xs={12} className='matrixRow headerRow'>
            <div className='colTitle'>1</div>
            <div className='colTitle'>2</div>
            <div className='colTitle'>3</div>
          </Grid>
        </div>
        <div className='probabilityTitle'>Probability</div>
      </div>
    </div>
  );
};

export default RiskMatrix;
