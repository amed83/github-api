import { useEffect, useState } from 'react';
import { fetchApi } from '../../services/fetch';
import List from '@material-ui/core/List';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { RepoItem } from '../RepoItem/RepoItem';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { useFetch } from '../customHook/useFetch';

export const Dashboard = () => {
  const [repoDetailsId, setRepoDetailsId] = useState();
  const { response, error } = useFetch(
    'https://api.github.com/orgs/godaddy/repos'
  );

  const handleShowSingleRepoDetails = (id) => {
    setRepoDetailsId(id);
  };

  if (error) {
    return <ErrorPage />;
  }

  return (
    <Router>
      {!error && response && (
        <Switch>
          <Route exact path='/'>
            {response.length > 0 && (
              <List>
                {response.map((repo) => {
                  return (
                    <RepoItem
                      repo={repo}
                      key={repo.id}
                      handleShowSingleRepoDetails={handleShowSingleRepoDetails}
                      showDetails={false}
                    />
                  );
                })}
              </List>
            )}
          </Route>
          <Route exact path='/:id'>
            <RepoItem
              repo={response.find((repo) => repo.id === repoDetailsId)}
              showDetails={true}
            />
          </Route>
        </Switch>
      )}
    </Router>
  );
};
