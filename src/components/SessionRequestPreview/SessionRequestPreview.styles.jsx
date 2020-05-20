import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
  paper: {
    marginLeft: spacing(2),
    marginRight: spacing(2),
    padding: spacing(2),
  },
}));

export default useStyles;
