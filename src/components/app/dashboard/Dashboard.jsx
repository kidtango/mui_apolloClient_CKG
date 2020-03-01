import React, { useState } from 'react';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import RefreshIcon from '@material-ui/icons/Refresh';
import Brightness1Icon from '@material-ui/icons/Brightness1';

import './dashboard.css';
import { useStyles } from './dashboardStyle';
import irisLogo from '../../../assets/production/irisLogo.png';
import chevronLogo from '../../../assets/production/chevron_logo.svg';
import { useAppContext } from '../../../contexts/AppContext';
import AppFeedbackModaldal from './appFeedbackModal/AppFeedbackModal';
import Modal from './modal/Modal';
import RiskProfileClassifier from './riskProfileClassifier/RiskProfileClassifier';

const ListItemLink = props => (
  <ListItem button component='a' {...props}></ListItem>
);

const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root + ' Dashboard'}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={classNames(classes.appBar, { [classes.appBarShift]: open })}
      >
        {/* <Modal />
        <AppFeedbackModaldal /> */}
        <Toolbar disableGutters={!open}>
          <IconButton
            color='inherit'
            aria-label='Open drawer'
            onClick={handleDrawerOpen}
            className={classNames(classes.menuButton, { [classes.hide]: open })}
          >
            <img src={irisLogo} className={'irisLogo'} alt='IRIS logo' />
          </IconButton>
          <h3 className='sectionTitle'>
            Upstream Projects and Operation Knowledge
          </h3>
          <img src={chevronLogo} className={'chevronLogo'} alt='Chevron logo' />
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItemLink
            key={'About'}
            href='https://iris.knowledge.maana.io/'
            target='_blank'
          >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={'About'} />
          </ListItemLink>
          <ListItem button>
            <ListItemIcon>
              <RefreshIcon />
            </ListItemIcon>
            <ListItemText primary={'Reset'} />
          </ListItem>
          <ListItem button className='riskKnowledge'>
            <ListItemIcon>
              <Brightness1Icon className={'knowledgeFilterIcon'} />
            </ListItemIcon>
            <ListItemText primary={'Risk Knowledge'} />
          </ListItem>
          <ListItem
            button
            // onClick={e => {
            //   showMainComponentsByKnowledgeSource('technical');
            // }}
            className='technicalKnowledge'
          >
            <ListItemIcon>
              <Brightness1Icon className='knowledgeFilterIcon' />
            </ListItemIcon>
            <ListItemText primary={'Technical Knowledge'} />
          </ListItem>
          <ListItem
            button
            // onClick={e => {
            //   this.props.showMainComponentsByKnowledgeSource('business');
            // }}
            className='businessKnowledge'
          >
            <ListItemIcon>
              <Brightness1Icon className='knowledgeFilterIcon' />
            </ListItemIcon>
            <ListItemText primary={'Business Knowledge'} />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.root}>
          <RiskProfileClassifier />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
