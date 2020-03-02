import _ from 'lodash';

const configureRiskBuckets = state => {
  let matrix3x3 = new Array(6);

  // let matrix6x6 = new Array(12);

  if (!state.riskProfilesList.riskProfile) {
    return;
  }

  _.each(state.riskProfilesList.riskProfile.riskBuckets, (rb, idx) => {
    let hiddenRisks = 0,
      hiddenLowConfidenceRisks = 0,
      substractedConfidenceLevel = 0,
      totalConfidenceLevel = 0,
      totalCompoundRisk = 0;

    rb.risks = _.map(rb.risks, r => {
      totalConfidenceLevel += r.confidenceLevel;
      if (
        !state.riskProfilesList.riskProfile.riskDisciplines[r.discipline.name]
          .selected
      ) {
        r.hide = true;
        substractedConfidenceLevel += r.confidenceLevel;
        if (r.lowConfidence) {
          hiddenLowConfidenceRisks++;
        }
        hiddenRisks++;
      } else {
        r.hide = false;
        totalCompoundRisk += r.score;
      }
      return r;
    });

    rb.filteredNumberOfRisks = rb.numberOfRisks - hiddenRisks;
    rb.filteredNumberOfLowConfidenceRisks =
      rb.numberOfLowConfidenceRisks - hiddenLowConfidenceRisks;
    let confidenceLevelDiff =
      (totalConfidenceLevel - substractedConfidenceLevel) * 100;
    if (confidenceLevelDiff > 0) {
      rb.filteredAverageConfidenceLevel =
        Math.floor(confidenceLevelDiff / rb.filteredNumberOfRisks) + '%';
    } else {
      rb.filteredAverageConfidenceLevel = '0%';
    }
    rb.filteredScore = (totalCompoundRisk * 100) / rb.risks.length;
    matrix3x3[idx] = rb;
  });
  return matrix3x3;
};

export default configureRiskBuckets;
