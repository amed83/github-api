import { useLocation } from 'react-router';
import { useFetch } from '../../customHook/useFetch';
import { ErrorPage } from '../../components/ErrorPage/ErrorPage';
import { RepoItem } from '../../components/RepoItem/RepoItem';

export const ShowSingleRepo = () => {
  const location = useLocation();
  const repoId = Number(location.pathname.substring(1));
  const { response, error } = useFetch(
    'https://api.github.com/orgs/godaddy/repos'
  );

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {response && (
        <RepoItem repo={response.find((el) => el.id === repoId)} showDetails />
      )}
    </>
  );
};
