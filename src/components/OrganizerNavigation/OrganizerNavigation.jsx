import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ListIcon from '@material-ui/icons/List';
import DateRangeIcon from '@material-ui/icons/DateRange';

import { ButtonGroup, Button, Grid, Hidden } from '@material-ui/core';

import useStyles from './OrganizerNavigation.styles';

const OrganizerNavigation = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.navigation} container justify='center'>
      <ButtonGroup variant='text' color='primary'>
        <Button component={RouterLink} to='/'>
          <HomeIcon />
          <Hidden smDown>Огляд</Hidden>
        </Button>
        <Button component={RouterLink} to='/services'>
          <ListIcon />
          <Hidden xsDown>Послуги</Hidden>
        </Button>
        <Button component={RouterLink} to='/clients'>
          <PeopleAltIcon />
          <Hidden xsDown>Клієнти</Hidden>
        </Button>
        <Button component={RouterLink} to='/sessions'>
          <DateRangeIcon />
          <Hidden xsDown>Сеанси</Hidden>
        </Button>
        <Button component={RouterLink} to='/comments'>
          <CommentIcon />
          <Hidden xsDown>Відгуки</Hidden>
        </Button>
        <Button component={RouterLink} to='/settings'>
          <SettingsIcon />
          <Hidden smDown>Налаштування</Hidden>
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

export default OrganizerNavigation;
