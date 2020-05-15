import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
  navigation: {
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
  },
}));

export default useStyles;
