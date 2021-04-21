import List from '@material-ui/core/List';
import { RepoItem } from '../../components/RepoItem/RepoItem';
import { ErrorPage } from '../../components/ErrorPage/ErrorPage';
import { useFetch } from '../../customHook/useFetch';
import { Grid } from '@material-ui/core';

export const ShowAllRepo = () => {
  const { response, error } = useFetch(
    'https://api.github.com/orgs/godaddy/repos'
  );

  if (error) {
    return <ErrorPage />;
  }
  return (
    <Grid container justify='center' style={{ marginTop: '2rem' }}>
      <Grid item lg={6} md={6} sm={6} xs={10}>
        {response && response.length > 0 && (
          <List>
            {response.map((repo) => {
              return <RepoItem repo={repo} key={repo.id} showDetails={false} />;
            })}
          </List>
        )}
      </Grid>
    </Grid>
  );
};
