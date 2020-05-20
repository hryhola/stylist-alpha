import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
  textField: {
    margin: spacing(2),
    width: '97%',
  },
  textFieldNotRequired: {
    margin: spacing(2),
    width: '97%',
    opacity: 0.5,
  },
  button: {
    width: '100%',
  },
}));

export default useStyles;
