import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
  stylistItem: {
    margin: spacing(2),
    padding: spacing(2),
  },
}));

export default useStyles;
