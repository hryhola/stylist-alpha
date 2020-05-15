import React, { useState } from 'react';

import {
  Typography,
  Grid,
  Box,
  TableBody,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Button,
} from '@material-ui/core';

import SessionRequestDialogContainer from '../../components/SessionRequestDialog/SessionRequestDialog.container';
import AddCommentDialogContainer from '../../components/AddCommentDialog/AddCommentDialog.container';
import Comment from '../../components/Comment/Comment';

import useStyles from './StylistPage.styles';

const StylistPageContent = ({
  stylist: {
    id,
    stylistName,
    shopName,
    shopAddress,
    workTimeStart,
    workTimeEnd,
    about,
    email,
    facebookLink,
    instagramLink,
    phoneNumber,
    comments,
    services,
  },
}) => {
  const [isOpenCommentDialog, setIsOpenCommentDialog] = useState(false);
  const [isOpenSessionRequestDialog, setIsOpenSessionRequestDialog] = useState(
    false
  );

  const classes = useStyles();
  return (
    <>
      <Paper className={classes.mainPaper}>
        {/*Name and contacts*/}
        <>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
          >
            <Typography variant='h4'>{stylistName}</Typography>
            <Box className={classes.linksContainer}>
              {instagramLink && (
                <a
                  className={classes.links}
                  href={instagramLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Instagram
                </a>
              )}
              <br />
              {facebookLink && (
                <a
                  className={classes.links}
                  href={facebookLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Facebook
                </a>
              )}
              <br />
              {email && (
                <a className={classes.links} href={`mailto:${email}`}>
                  {email}
                </a>
              )}
            </Box>
          </Grid>
          <Typography color='textSecondary'>{phoneNumber}</Typography>
          {shopName || shopAddress ? (
            <Typography color='textSecondary'>
              {shopName && shopName + ', '}
              {shopAddress}
            </Typography>
          ) : null}
        </>
        <hr />
        {/*Details*/}
        <>
          <Typography>
            Робочий час: {workTimeStart} - {workTimeEnd}
          </Typography>
          <Typography color='textSecondary'>{about}</Typography>
        </>
      </Paper>
      <Paper className={classes.tablePaper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Послуга</TableCell>
              <TableCell align='right'>Ціна</TableCell>
              <TableCell align='right'>Тривалість</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services &&
              services.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component='th' scope='row'>
                    {row.displayName}
                  </TableCell>
                  <TableCell align='right'>{row.price} грн</TableCell>
                  <TableCell align='right'>
                    {row.durationInMitutes} хв
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Grid
          className={classes.tableBottomText}
          container
          direction='row'
          justify='space-between'
          alignItems='center'
        >
          <Typography color='textSecondary'>
            Наведені приблизні ціни та тривалість. Уточнення при замовленні
          </Typography>
          <Box className={classes.submitButtonContainer}>
            <Button
              className={classes.submitButton}
              color='primary'
              variant='contained'
              onClick={() => setIsOpenSessionRequestDialog(true)}
            >
              Записатись на сеанс
            </Button>
          </Box>
        </Grid>
      </Paper>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Button
          className={classes.commentButton}
          color='default'
          variant='contained'
          onClick={() => setIsOpenCommentDialog(true)}
        >
          Залишити відгук
        </Button>
      </Grid>
      <Grid container spacing={3} className={classes.commentsContainer}>
        {comments &&
          comments.map((comment) => (
            <Grid item xs={12} sm={6} key={comment.id}>
              <Comment comment={comment} />
            </Grid>
          ))}
      </Grid>
      {/* Modal Dialogs */}
      <AddCommentDialogContainer
        stylistId={id}
        isOpen={isOpenCommentDialog}
        setIsOpen={setIsOpenCommentDialog}
      />

      <SessionRequestDialogContainer
        stylist={{ id, services }}
        isOpen={isOpenSessionRequestDialog}
        setIsOpen={setIsOpenSessionRequestDialog}
      />
    </>
  );
};

export default StylistPageContent;
