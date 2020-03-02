import _ from 'lodash';

const mapMatrix = (riskBuckets, colorsMap) => {
  let mappedMatrix = {};
  if (riskBuckets && riskBuckets.length) {
    _.each(riskBuckets, rb => {
      if (rb) {
        let severityIdx = rb.severity - 1;
        let likelihoodIdx = rb.likelihood - 1;
        mappedMatrix[severityIdx + ',' + likelihoodIdx] = {
          ...rb,
          colorClass: colorsMap[severityIdx][likelihoodIdx]
        };
      }
    });
  }
  return mappedMatrix;
};

export default mapMatrix;
