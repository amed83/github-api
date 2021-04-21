import { makeStyles } from '@material-ui/core/styles';

const grey = '#586069';

export const useStyles = makeStyles({
  mainContainer: {
    justifyContent: 'center',
    marginTop: '4rem',
    padding: '1rem',
  },
  repoTypography: {
    color: '#0366d6',
    fontWeight: '700',
    marginLeft: '5px',
  },
  descriptionTypography: {
    color: grey,
    fontSize: '0.90rem',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.35rem',
  },
  iconsContainer: {
    color: grey,
    display: 'flex',
    alignItems: 'center',
    '& p': {
      marginLeft: '4px',
      fontWeight: 700,
    },
  },
  linkItem: {
    textDecoration: 'none',
    color: 'inherit',
  },
});
