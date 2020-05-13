/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Formik } from 'formik';
import * as yup from 'yup';
import { auth } from '../../firebase/firebase.utils';

import { Grid, Typography, Button } from '@material-ui/core';

import TextFieldWithError from '../TextFieldWithError/TextFieldWithError';

import useStyles from './SignInFrom.styles';

const SignIn = () => {
  const [errorSubmitMessage, setErrorSubmitMessage] = useState('');
  const classes = useStyles();

  const onSubmit = async (values, actions) => {
    actions.setSubmitting(true);
    const { email, password } = values;
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
    actions.setSubmitting(false);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Введіть коректну пошту')
      .required("Це обов'язкове поле!"),
    password: yup
      .string()
      .min(6, 'Пароль занадто короткий')
      .max(30, 'Пароль занадто довгий')
      .required("Це обов'язкове поле!"),
  });

  return (
    <>
      <Typography variant='h6'>Увійти</Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='flex-start'
            >
              <TextFieldWithError
                className={classes.textField}
                type='email'
                label='Електронна пошта'
                onChange={(e) => {
                  setErrorSubmitMessage('');
                  return props.handleChange(e);
                }}
                onBlur={props.handleBlur}
                value={props.values.email}
                name='email'
                disabled={props.isSubmitting}
                isVisibleError={props.errors.email && props.touched.email}
                errorMessage={props.errors.email}
              />
              <TextFieldWithError
                className={classes.textField}
                type='password'
                label='Пароль'
                onChange={(e) => {
                  setErrorSubmitMessage('');
                  return props.handleChange(e);
                }}
                onBlur={props.handleBlur}
                value={props.values.password}
                name='password'
                disabled={props.isSubmitting}
                isVisibleError={props.errors.password && props.touched.password}
                errorMessage={props.errors.password}
              />
              {errorSubmitMessage ? (
                <Typography color='error'>{errorSubmitMessage}</Typography>
              ) : null}
              <Button
                className={classes.button}
                variant='contained'
                color='primary'
                type='submit'
                disabled={props.isSubmitting}
              >
                Надіслати
              </Button>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignIn;
