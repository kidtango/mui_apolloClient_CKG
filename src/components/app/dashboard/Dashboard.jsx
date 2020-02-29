import React, { useEffect } from 'react';
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

const Dashboard = () => {
  const classes = useStyles();
  const { open, setOpen } = useAppContext();

  const handleDrawerOpen = () => {
    console.log('handle open drawer');
  };

  return (
    <div className={classes.root + ' Dashboard'}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={classNames(classes.appBar, { [classes.appBarShift]: open })}
      >
        <Modal />
        <AppFeedbackModaldal />
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
          <img src={chevronLogo} className={'maanaLogo'} alt='Chevron logo' />
        </Toolbar>
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
          <div className={classes.toolbar}>diviidid</div>
        </Drawer>
      </AppBar>
    </div>
  );
};

export default Dashboard;
