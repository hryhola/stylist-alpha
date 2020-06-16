import React from 'react';
import { updateUserProfile } from '../../firebase/user';
import { Formik } from 'formik';
import * as yup from 'yup';

import { Grid, Button } from '@material-ui/core';

import TextFieldWithError from '../TextFieldWithError/TextFieldWithError';

import useStyles from './SettingsFrame.styles';

const SettingsFrame = ({ stylistData, setStylistData }) => {
  const onSubmit = async (values, actions) => {
    actions.setSubmitting(true);
    try {
      await updateUserProfile(stylistData.id, values);
    } catch (error) {
      alert(error.message);
    } finally {
      actions.setSubmitting(false);
    }
  };

  const classes = useStyles();

  const {
    email,
    facebookLink,
    instagramLink,
    phoneNumber,
    shopAddress,
    shopName,
    stylistName,
    workTimeStart,
    workTimeEnd,
    about,
  } = stylistData;

  const initialValues = {
    oldEmail: email,
    newEmail: email,
    facebookLink,
    instagramLink,
    phoneNumber,
    shopAddress,
    shopName,
    stylistName,
    workTimeStart,
    workTimeEnd,
    oldPassword: '',
    newPassword: '',
    about,
  };

  const reqText = "Це поле обов'язкове!";
  const validationSchema = yup.object().shape({
    stylistName: yup.string().required(reqText),
    phoneNumber: yup.string().required(reqText),
    oldEmail: yup.string().email('Введіть коректну пошту').required(reqText),
    newEmail: yup.string().email('Введіть коректну пошту').required(reqText),
    shopAddress: yup.string().required(reqText),
    workTimeStart: yup.string().required(reqText),
    workTimeEnd: yup.string().required(reqText),
    shopName: yup.string(),
    facebookLink: yup.string(),
    instagramLink: yup.string(),
    about: yup.string(),
    newPassword: yup
      .string()
      .min(6, 'Пароль занадто короткий')
      .max(30, 'Пароль занадто довгий')
      .required(reqText),
    oldPassword: yup
      .string()
      .min(6, 'Пароль занадто короткий')
      .max(30, 'Пароль занадто довгий')
      .required(reqText),
  });

  return (
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
              onChange={props.handleChange}
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
              onChange={props.handleChange}
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
              label='Стара електронна пошта'
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.oldEmail}
              name='oldEmail'
              disabled={props.isSubmitting}
              isVisibleError={props.errors.oldEmail && props.touched.oldEmail}
              errorMessage={props.errors.oldEmail}
            />
            <TextFieldWithError
              className={classes.textField}
              type='text'
              label='Нова електронна пошта'
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.newEmail}
              name='newEmail'
              disabled={props.isSubmitting}
              isVisibleError={props.errors.newEmail && props.touched.newEmail}
              errorMessage={props.errors.newEmail}
            />
            <TextFieldWithError
              className={classes.textField}
              type='text'
              label='Адрес перукарні'
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.shopAddress}
              name='shopAddress'
              disabled={props.isSubmitting}
              isVisibleError={
                props.errors.shopAddress && props.touched.shopAddress
              }
              errorMessage={props.errors.shopAddress}
            />
            <TextFieldWithError
              className={classes.textFieldNotRequired}
              type='text'
              label='Назва перукарні'
              onChange={props.handleChange}
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
              onChange={props.handleChange}
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
              onChange={props.handleChange}
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
              label='Старий пароль'
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.oldPassword}
              name='oldPassword'
              disabled={props.isSubmitting}
              isVisibleError={
                props.errors.oldPassword && props.touched.oldPassword
              }
              errorMessage={props.errors.oldPassword}
            />
            <TextFieldWithError
              className={classes.textField}
              type='password'
              label='Новий пароль'
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.newPassword}
              name='newPassword'
              disabled={props.isSubmitting}
              isVisibleError={
                props.errors.newPassword && props.touched.newPassword
              }
              errorMessage={props.errors.newPassword}
            />
            <TextFieldWithError
              className={classes.textField}
              label='Деталі'
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.about}
              name='about'
              disabled={props.isSubmitting}
              isVisibleError={props.errors.about && props.touched.about}
              errorMessage={props.errors.about}
            />
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              type='submit'
              disabled={props.isSubmitting}
            >
              Зберегти
            </Button>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default SettingsFrame;
