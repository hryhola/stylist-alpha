import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
  title: {
    paddingLeft: spacing(2),
    paddingBottom: spacing(2),
  },
}));

export default useStyles;
