import List from '@material-ui/core/List';
import { RepoItem } from '../../components/RepoItem/RepoItem';
import { ErrorPage } from '../../components/ErrorPage/ErrorPage';
import { useFetch } from '../../customHook/useFetch';

export const ShowAllRepo = () => {
  const { response, error } = useFetch(
    'https://api.github.com/orgs/godaddy/repos'
  );

  if (error) {
    return <ErrorPage />;
  }
  return (
    <>
      {response && response.length > 0 && (
        <List>
          {response.map((repo) => {
            return <RepoItem repo={repo} key={repo.id} showDetails={false} />;
          })}
        </List>
      )}
    </>
  );
};
