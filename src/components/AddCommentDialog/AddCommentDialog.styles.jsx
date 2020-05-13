import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  title: {
    paddingBottom: spacing(1),
  },
  input: {
    width: breakpoints.values.sm / 2 + 'px',
  },
  buttonContainer: {
    marginLeft: spacing(2),
    marginRight: spacing(2),
    marginBottom: spacing(1.5),
  },
}));

export default useStyles;
