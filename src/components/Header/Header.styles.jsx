import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
  },
  welcome: {
    color: '#99bcf0',
  },
  navigation: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signOut: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mrLeftAuto: {
    marginLeft: 'auto',
  },
  toolbar: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
}));

export default useStyles;
