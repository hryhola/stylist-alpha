import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  mainPaper: {
    margin: spacing(2),
    padding: spacing(3),
  },
  tablePaper: {
    margin: spacing(2),
    padding: spacing(2),
  },
  links: {
    color: palette.primary.main,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  linksContainer: {
    textAlign: 'right',
    [breakpoints.down('xs')]: {
      textAlign: 'left',
      marginTop: spacing(1),
      width: '100%',
    },
  },
  tableBottomText: {
    marginTop: spacing(2),
    marginLeft: spacing(2),
    paddingRight: spacing(2),
    marginBottom: spacing(0.5),
  },
  submitButtonContainer: {
    [breakpoints.down('sm')]: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: spacing(1),
    },
  },
  submitButton: {
    [breakpoints.down('xs')]: {
      marginTop: spacing(1),
      width: '100%',
    },
  },
  commentButton: {
    [breakpoints.down('xs')]: {
      width: '84%',
    },
  },
  commentsContainer: {
    marginTop: spacing(2),
  },
}));

export default useStyles;
