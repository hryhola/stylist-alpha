import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Hidden,
} from '@material-ui/core';

import useStyles from './Header.styles';

import { ReactComponent as Logo } from '../../logo.svg';

import { auth } from '../../firebase/firebase.utils';
const Header = ({ stylistData }) => {
  const classes = useStyles();
  const isAuthorized = !!stylistData;
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Container>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
              to='/'
              component={RouterLink}
            >
              <Logo fill='white' width='40' height='40' />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              StylistAlpha
            </Typography>
            {isAuthorized ? (
              <>
                <div className={classes.navigation}>
                  <Button
                    color='inherit'
                    to='/stylist-list'
                    component={RouterLink}
                  >
                    Стилісти
                  </Button>
                </div>
                <div className={classes.signOut}>
                  <Hidden xsDown>
                    <Typography variant='subtitle1' className={classes.welcome}>
                      Вітаю,&nbsp;
                      {stylistData.stylistName}
                    </Typography>
                  </Hidden>
                  <Button onClick={() => auth.signOut()} color='inherit'>
                    Вийти
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Button
                  color='inherit'
                  to='/signin'
                  component={RouterLink}
                  className={classes.mrLeftAuto}
                >
                  Увійти
                </Button>
                <Button color='inherit' to='/signup' component={RouterLink}>
                  Реєстрація
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.instanceOf(Object),
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
