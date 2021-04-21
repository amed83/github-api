import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export const ErrorPage = () => {
  return (
    <Grid container justify='center' style={{ marginTop: '4rem' }}>
      <Grid item>
        <Typography variant='h5' color='error'>
          Sorry, there was an error. Try again later
        </Typography>
      </Grid>
    </Grid>
  );
};
