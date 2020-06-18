import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Container, Grid, Paper, Link } from '@material-ui/core';
import useStyles from './SignInPage.styles';

import SignInForm from '../../components/SignInForm/SignInForm';

const SignInPage = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container direction='row' justify='center' alignItems='flex-start'>
        <Paper elevation={3} className={classes.SignUpContainer}>
          <SignInForm />
        </Paper>
        <Paper elevation={3} className={classes.SignInLinkContainer}>
          Немаєте акаунта?&nbsp;
          <Link component={RouterLink} to='/stylist-alpha/signup'>
            Зареєструйтесь
          </Link>
        </Paper>
      </Grid>
    </Container>
  );
};

export default SignInPage;
