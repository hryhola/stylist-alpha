import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  formControl: {
    width: '100%',
  },
  title: {
    paddingBottom: '0',
  },
  buttonContainer: {
    marginLeft: spacing(2),
    marginRight: spacing(2),
    marginBottom: spacing(1.5),
  },
  notRequired: {
    opacity: 0.5,
  },
}));

export default useStyles;
