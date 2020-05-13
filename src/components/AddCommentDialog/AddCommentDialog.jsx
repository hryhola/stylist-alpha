import React, { useState } from 'react';

import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@material-ui/core';

import TextFieldWithError from '../TextFieldWithError/TextFieldWithError';

import { Formik } from 'formik';
import * as yup from 'yup';

import useStyles from './AddCommentDialog.styles';

const AddCommentDialog = ({
  stylistId,
  isOpen,
  setIsOpen,
  sendComment,
  error,
  isSending,
}) => {
  const [submitErrorMessage, setSubmitErrorMessage] = useState(
    error ? JSON.stringify(error).toString() : ''
  );

  const initialValues = {
    name: '',
    email: '',
    text: '',
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Це обов'язкове поле!"),
    email: yup
      .string()
      .email('Введіть коректну пошту')
      .required("Це обов'язкове поле!"),
    text: yup.string().required("Це обов'язкове поле!"),
  });

  const handleBack = () => setIsOpen(false);
  const handleSubmit = async (values, actions) => {
    const comment = { ...values };
    sendComment({ stylistId, comment });
    setIsOpen(false);
  };

  const classes = useStyles();
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby='confirm-dialog'
    >
      <DialogTitle className={classes.title} id='confirm-dialog'>
        Залиште відгук
      </DialogTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <DialogContent>
              <Grid container direction='column' spacing={2}>
                <Grid item>
                  <TextFieldWithError
                    className={classes.input}
                    value={props.values.name}
                    variant='outlined'
                    onChange={(e) => {
                      setSubmitErrorMessage('');
                      return props.handleChange(e);
                    }}
                    onBlur={props.handleBlur}
                    label="Ім'я"
                    name='name'
                    disabled={isSending}
                    isVisibleError={props.errors.name && props.touched.name}
                    errorMessage={props.errors.name}
                  />
                </Grid>
                <Grid item>
                  <TextFieldWithError
                    className={classes.input}
                    type='email'
                    value={props.values.email}
                    onChange={(e) => {
                      setSubmitErrorMessage('');
                      return props.handleChange(e);
                    }}
                    onBlur={props.handleBlur}
                    variant='outlined'
                    label='Електронна пошта'
                    name='email'
                    disabled={isSending}
                    isVisibleError={props.errors.email && props.touched.email}
                    errorMessage={props.errors.email}
                  />
                </Grid>
                <Grid item>
                  <TextFieldWithError
                    className={classes.input}
                    multiline
                    rows={4}
                    variant='outlined'
                    value={props.values.text}
                    onChange={(e) => {
                      setSubmitErrorMessage('');
                      return props.handleChange(e);
                    }}
                    onBlur={props.handleBlur}
                    label='Коментар'
                    name='text'
                    disabled={isSending}
                    isVisibleError={props.errors.text && props.touched.text}
                    errorMessage={props.errors.text}
                  />
                </Grid>
                {submitErrorMessage && (
                  <Grid item>
                    <Typography color='error'>{submitErrorMessage}</Typography>
                  </Grid>
                )}
              </Grid>
            </DialogContent>
            <DialogActions>
              <Grid
                className={classes.buttonContainer}
                container
                justify='space-between'
              >
                <Button
                  variant='contained'
                  onClick={handleBack}
                  color='default'
                >
                  Назад
                </Button>
                <Button
                  variant='contained'
                  color='secondary'
                  type='submit'
                  disabled={props.isSubmitting}
                >
                  Підтвердити
                </Button>
              </Grid>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Dialog>
  );
};

export default AddCommentDialog;
