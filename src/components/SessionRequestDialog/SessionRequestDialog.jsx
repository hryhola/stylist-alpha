import React, { useState } from 'react';
import moment from 'moment';

import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

import TextFieldWithError from '../TextFieldWithError/TextFieldWithError';

import { Formik } from 'formik';
import * as yup from 'yup';

import useStyles from './SessionRequestDialog.styles';

const SessionRequestDialog = ({
  isOpen,
  setIsOpen,
  error,
  isSending,
  sendSessionRequest,
  stylist: { id, services },
}) => {
  const [submitErrorMessage, setSubmitErrorMessage] = useState(
    error ? JSON.stringify(error).toString() : ''
  );

  const classes = useStyles();
  const handleBack = () => setIsOpen(false);
  const handleSubmit = async (values, actions) => {
    const sessionRequest = { ...values };
    sendSessionRequest({ stylistId: id, sessionRequest });
    setIsOpen(false);
  };

  const initialValues = {
    clientName: '',
    clientPhoneNumber: '',
    clientSocialLink: '',
    dataTime: moment(Date.now()).format('YYYY-MM-DDTkk:mm'),
    service: '',
  };

  const validationSchema = yup.object().shape({
    clientName: yup.string().required("Це обов'язкове поле!"),
    clientPhoneNumber: yup
      .number('Це не номер телефону')
      .positive('Це не номер телефону')
      .integer('Це не номер телефону')
      .required("Це обов'язкове поле!"),
    clientSocialLink: yup.string(),
    dataTime: yup.date("Це обов'язкове поле!"),
    service: yup.string().required("Це обов'язкове поле!"),
  });
  return (
    <Dialog open={isOpen} onClose={handleBack} aria-labelledby='confirm-dialog'>
      <DialogTitle className={classes.title}>Запис на сеанс</DialogTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(props) => {
          const handleChange = (e) => {
            setSubmitErrorMessage('');
            return props.handleChange(e);
          };
          return (
            <form onSubmit={props.handleSubmit}>
              <DialogContent>
                <Grid container direction='column' spacing={2}>
                  <Grid item>
                    <TextFieldWithError
                      className={classes.formControl}
                      value={props.values.clientName}
                      variant='outlined'
                      onChange={handleChange}
                      onBlur={props.handleBlur}
                      label="Ім'я"
                      name='clientName'
                      disabled={isSending}
                      isVisibleError={
                        props.errors.clientName && props.touched.clientName
                      }
                      errorMessage={props.errors.clientName}
                    />
                  </Grid>
                  <Grid item>
                    <TextFieldWithError
                      className={classes.formControl}
                      value={props.values.clientPhoneNumber}
                      variant='outlined'
                      onChange={handleChange}
                      onBlur={props.handleBlur}
                      label='Норер телефону'
                      name='clientPhoneNumber'
                      disabled={isSending}
                      isVisibleError={
                        props.errors.clientPhoneNumber &&
                        props.touched.clientPhoneNumber
                      }
                      errorMessage={props.errors.clientPhoneNumber}
                    />
                  </Grid>
                  <Grid item>
                    <FormControl
                      variant='outlined'
                      className={classes.formControl}
                    >
                      <InputLabel id='serviceSelectLabel'>Послуга</InputLabel>
                      <Select
                        labelId='serviceSelectLabel'
                        id='serviceSelect'
                        name='service'
                        value={props.values.service}
                        onChange={handleChange}
                        label='Послуга'
                      >
                        {services.map((s) => (
                          <MenuItem key={s.id} value={s.id}>
                            {s.displayName}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {props.errors.service && props.touched.service ? (
                      <Typography color='error'>
                        {props.errors.service}
                      </Typography>
                    ) : null}
                  </Grid>
                  <Grid item>
                    <TextFieldWithError
                      className={classes.formControl}
                      value={props.values.dataTime}
                      type='datetime-local'
                      variant='outlined'
                      onChange={handleChange}
                      onBlur={props.handleBlur}
                      label='Час та дата'
                      name='dataTime'
                      disabled={isSending}
                      isVisibleError={
                        props.errors.dataTime && props.touched.dataTime
                      }
                      errorMessage={props.errors.dataTime}
                    />
                  </Grid>
                  <Grid item>
                    <TextFieldWithError
                      className={`${classes.formControl} ${classes.notRequired}`}
                      value={props.values.clientSocialLink}
                      variant='outlined'
                      onChange={handleChange}
                      onBlur={props.handleBlur}
                      label='Профіль у соц.мережі'
                      name='clientSocialLink'
                      disabled={isSending}
                      isVisibleError={
                        props.errors.clientSocialLink &&
                        props.touched.clientSocialLink
                      }
                      errorMessage={props.errors.clientSocialLink}
                    />
                  </Grid>
                  {submitErrorMessage && (
                    <Grid item>
                      <Typography color='error'>
                        {submitErrorMessage}
                      </Typography>
                    </Grid>
                  )}
                  <Grid item>
                    <Typography color='textSecondary'>
                      Час буде дотатково узгоджений по телефону
                    </Typography>
                  </Grid>
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
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default SessionRequestDialog;
