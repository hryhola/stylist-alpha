import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import * as yup from 'yup';

import { Grid, Typography, Button } from '@material-ui/core';

import TextFieldWithError from '../TextFieldWithError/TextFieldWithError';

import { auth, createProfieDocument } from '../../firebase/firebase.utils';

import useStyles from './SignUpForm.styles';

const SignUp = () => {
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');
  const classes = useStyles();

  const onSubmit = async (values, actions) => {
    actions.setSubmitting(true);

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      const data = { ...values };
      delete data.confirmPassword;
      await createProfieDocument(user, data);
    } catch (error) {
      console.error(error);
    }

    actions.setSubmitting(false);
  };

  const initialValues = {
    email: '',
    facebookLink: '',
    instagramLink: '',
    phoneNumber: '',
    shopAddres: '',
    shopName: '',
    stylistName: '',
    workTimeStart: '',
    workTimeEnd: '',
    password: '',
    confirmPassword: '',
  };

  const reqText = "Це поле обов'язкове!";
  const validationSchema = yup.object().shape({
    stylistName: yup.string().required(reqText),
    phoneNumber: yup.string().required(reqText),
    email: yup.string().email().required(reqText),
    shopAddres: yup.string().required(reqText),
    workTimeStart: yup.string().required(reqText),
    workTimeEnd: yup.string().required(reqText),
    shopName: yup.string(),
    facebookLink: yup.string(),
    instagramLink: yup.string(),
    password: yup
      .string()
      .min(6, 'Пароль занадто короткий')
      .max(30, 'Пароль занадто довгий')
      .required(reqText),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Паролі мають співпадати!')
      .required(reqText),
  });

  return (
    <>
      <Typography variant='h6'>Зереєструйтесь</Typography>
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
                type='text'
                label="Ваше ім'я"
                onChange={(e) => {
                  setSubmitErrorMessage('');
                  return props.handleChange(e);
                }}
                onBlur={props.handleBlur}
                value={props.values.stylistName}
                name='stylistName'
                disabled={props.isSubmitting}
                isVisibleError={
                  props.errors.stylistName && props.touched.stylistName
                }
                errorMessage={props.errors.stylistName}
              />
              <TextFieldWithError
                className={classes.textField}
                type='text'
                label='Номер телефону'
                onChange={(e) => {
                  setSubmitErrorMessage('');
                  return props.handleChange(e);
                }}
                onBlur={props.handleBlur}
                value={props.values.phoneNumber}
                name='phoneNumber'
                disabled={props.isSubmitting}
                isVisibleError={
                  props.errors.phoneNumber && props.touched.phoneNumber
                }
                errorMessage={props.errors.phoneNumber}
              />
              <TextFieldWithError
                className={classes.textField}
                type='text'
                label='Електронна пошта'
                onChange={(e) => {
                  setSubmitErrorMessage('');
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
                type='text'
                label='Адрес перукарні'
                onChange={(e) => {
                  setSubmitErrorMessage('');
                  return props.handleChange(e);
                }}
                onBlur={props.handleBlur}
                value={props.values.shopAddres}
                name='shopAddres'
                disabled={props.isSubmitting}
                isVisibleError={
                  props.errors.shopAddres && props.touched.shopAddres
                }
                errorMessage={props.errors.shopAddres}
              />
              <TextFieldWithError
                className={classes.textFieldNotRequired}
                type='text'
                label='Назва перукарні'
                onChange={(e) => {
                  setSubmitErrorMessage('');
                  return props.handleChange(e);
                }}
                onBlur={props.handleBlur}
                value={props.values.shopName}
                name='shopName'
                disabled={props.isSubmitting}
                isVisibleError={props.errors.shopName && props.touched.shopName}
                errorMessage={props.errors.shopName}
              />
              <TextFieldWithError
                className={classes.textFieldNotRequired}
                type='text'
                label='Instagram'
                onChange={(e) => {
                  setSubmitErrorMessage('');
                  return props.handleChange(e);
                }}
                onBlur={props.handleBlur}
                value={props.values.instagramLink}
                name='instagramLink'
                disabled={props.isSubmitting}
                isVisibleError={
                  props.errors.instagramLink && props.touched.instagramLink
                }
                errorMessage={props.errors.instagramLink}
              />
              <TextFieldWithError
                className={classes.textFieldNotRequired}
                type='text'
                label='Facebook'
                onChange={(e) => {
                  setSubmitErrorMessage('');
                  return props.handleChange(e);
                }}
                onBlur={props.handleBlur}
                value={props.values.facebookLink}
                name='facebookLink'
                disabled={props.isSubmitting}
                isVisibleError={
                  props.errors.facebookLink && props.touched.facebookLink
                }
                errorMessage={props.errors.facebookLink}
              />
              <TextFieldWithError
                className={classes.textField}
                type='text'
                label='Час початку робочого дня'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.workTimeStart}
                name='workTimeStart'
                disabled={props.isSubmitting}
                isVisibleError={
                  props.errors.workTimeStart && props.touched.workTimeStart
                }
                errorMessage={props.errors.workTimeStart}
              />
              <TextFieldWithError
                className={classes.textField}
                type='text'
                label='Час кінця робочого дня'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.workTimeEnd}
                name='workTimeEnd'
                disabled={props.isSubmitting}
                isVisibleError={
                  props.errors.workTimeEnd && props.touched.workTimeEnd
                }
                errorMessage={props.errors.workTimeEnd}
              />
              <TextFieldWithError
                className={classes.textField}
                type='password'
                label='Пароль'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
                name='password'
                disabled={props.isSubmitting}
                isVisibleError={props.errors.password && props.touched.password}
                errorMessage={props.errors.password}
              />
              <TextFieldWithError
                className={classes.textField}
                type='password'
                label='Підтвердіть пароль'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.confirmPassword}
                name='confirmPassword'
                disabled={props.isSubmitting}
                isVisibleError={
                  props.errors.confirmPassword && props.touched.confirmPassword
                }
                errorMessage={props.errors.confirmPassword}
              />
              {submitErrorMessage ? (
                <Typography color='error'>{submitErrorMessage}</Typography>
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

SignUp.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
};

export default SignUp;
