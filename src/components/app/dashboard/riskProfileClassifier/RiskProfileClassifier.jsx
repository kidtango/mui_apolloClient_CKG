import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import './riskProfileClassifier.css';
import usePrevious from '../../../../utils/custom_hooks/usePrevious';
import { useStyles } from './riskProfileClassifierStyle';
import RiskProfilesList from './riskProfilesList/RiskProfilesList';
import KnowledgeTree from './knowledgeTree/KnowledgeTree';
import RiskMatrix from './riskMatrix/RiskMatrix';

const RiskProfileClassifier = () => {
  const [mainWidgetState, setMainWidgetState] = useState({
    risk: {
      riskDisciplines: true,
      riskProfile: true,
      riskKnowledgeKeywords: true,
      riskInsightViewer: true,
      riskStream: true
    },
    technical: {
      knowledgeSources: true,
      topConcept: true,
      concept16b: true,
      concept32: true
    },
    business: {
      NPVStochastic: true,
      NPVConceptSelection: true
    }
  });

  const classes = useStyles();
  const prevMainWidgetState = usePrevious(mainWidgetState);

  const handleExpand = (type, subType) => {
    setMainWidgetState({
      ...mainWidgetState,
      [type]: {
        ...mainWidgetState[type],
        [subType]: !mainWidgetState[type][subType]
      }
    });
  };

  return (
    <div className='RiskProfileClassifier'>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4} md={3}>
          <ExpansionPanel
            expanded={mainWidgetState.risk.riskDisciplines}
            className='mainWidgetExpansionPanel riskManagementWidget'
          >
            <ExpansionPanelSummary
              className='mainWidgetExpansionPanelSummary'
              onClick={e => handleExpand('risk', 'riskDisciplines')}
            >
              Risk Disciplines
              <KeyboardArrowUpIcon className='ArrowUpIcon' />
              <KeyboardArrowDownIcon className='ArrowDownIcon' />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <RiskProfilesList classes={classes} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={mainWidgetState.technical.knowledgeSources}
            className='mainWidgetExpansionPanel petroTechnicalWidget'
          >
            <ExpansionPanelSummary
              className='mainWidgetExpansionPanelSummary'
              onClick={e => handleExpand('technical', 'knowledgeSources')}
            >
              Knowledge Sources
              <KeyboardArrowUpIcon className='ArrowUpIcon' />
              <KeyboardArrowDownIcon className='ArrowDownIcon' />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <KnowledgeTree />
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
        <Grid item xs={12} sm={8} md={5}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <ExpansionPanel
                expanded={mainWidgetState.risk.riskProfile}
                className='mainWidgetExpansionPanel riskManagementWidget'
              >
                <ExpansionPanelSummary
                  className='mainWidgetExpansionPanelSummary'
                  onClick={e => handleExpand('risk', 'riskProfile')}
                >
                  Risk Profile
                  <KeyboardArrowUpIcon className='ArrowUpIcon' />
                  <KeyboardArrowDownIcon className='ArrowDownIcon' />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* <RiskMatrix /> risk matrix */}
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={mainWidgetState.risk.riskKnowledgeKeywords}
                className='mainWidgetExpansionPanel riskManagementWidget'
              >
                <ExpansionPanelSummary
                  className='mainWidgetExpansionPanelSummary'
                  onClick={e => handleExpand('risk', 'riskKnowledgeKeywords')}
                >
                  Risk Knowledge Keywords
                  <KeyboardArrowUpIcon className='ArrowUpIcon' />
                  <KeyboardArrowDownIcon className='ArrowDownIcon' />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* <KeywordsViewer /> */}
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={mainWidgetState.risk.riskInsightViewer}
                className='mainWidgetExpansionPanel riskManagementWidget'
              >
                <ExpansionPanelSummary
                  className='mainWidgetExpansionPanelSummary'
                  onClick={e => handleExpand('risk', 'riskInsightViewer')}
                >
                  Risk Insight Viewer
                  <KeyboardArrowUpIcon className='ArrowUpIcon' />
                  <KeyboardArrowDownIcon className='ArrowDownIcon' />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* <InsightViewer /> */}
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={mainWidgetState.technical.topConcept}
                className='mainWidgetExpansionPanel petroTechnicalWidget'
              >
                <ExpansionPanelSummary
                  className='mainWidgetExpansionPanelSummary'
                  onClick={e => handleExpand('technical', 'topConcept')}
                >
                  Top Engineering Concept
                  <KeyboardArrowUpIcon className='ArrowUpIcon' />
                  <KeyboardArrowDownIcon className='ArrowDownIcon' />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* <ConceptsList justConceptIdx={0} /> */}
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={mainWidgetState.business.NPVStochastic}
                className='mainWidgetExpansionPanel businessWidget'
              >
                <ExpansionPanelSummary
                  className='mainWidgetExpansionPanelSummary'
                  onClick={e => handleExpand('business', 'NPVStochastic')}
                >
                  NPV Concept Selection Analysis
                  <KeyboardArrowUpIcon className='ArrowUpIcon' />
                  <KeyboardArrowDownIcon className='ArrowDownIcon' />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='NPVConceptContainer'>
                  {/* <NPVStochastic /> */}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ExpansionPanel
            expanded={mainWidgetState.risk.riskStream}
            className='mainWidgetExpansionPanel riskManagementWidget'
          >
            <ExpansionPanelSummary
              className='mainWidgetExpansionPanelSummary'
              onClick={e => handleExpand('risk', 'riskStream')}
            >
              Risk Stream
              <KeyboardArrowUpIcon className='ArrowUpIcon' />
              <KeyboardArrowDownIcon className='ArrowDownIcon' />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {/* <RiskStreamList classes={classes} theme={theme} /> */}
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={mainWidgetState.technical.concept32}
            className='mainWidgetExpansionPanel petroTechnicalWidget'
          >
            <ExpansionPanelSummary
              className='mainWidgetExpansionPanelSummary'
              onClick={e => handleExpand('technical', 'concept32')}
            >
              Contending Engineering Concepts
              <KeyboardArrowUpIcon className='ArrowUpIcon' />
              <KeyboardArrowDownIcon className='ArrowDownIcon' />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className='NConceptsContainer'>
              {/* <ConceptsList conceptIdxToOmit={0} /> */}
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={mainWidgetState.business.NPVConceptSelection}
            className='mainWidgetExpansionPanel businessWidget'
          >
            <ExpansionPanelSummary
              className='mainWidgetExpansionPanelSummary'
              onClick={e => handleExpand('business', 'NPVConceptSelection')}
            >
              NPV Stochastic Analysis
              <KeyboardArrowUpIcon className='ArrowUpIcon' />
              <KeyboardArrowDownIcon className='ArrowDownIcon' />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className='NPVConceptContainer'>
              {/* <NPVConceptSelection /> */}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Grid>
    </div>
  );
};

export default RiskProfileClassifier;
