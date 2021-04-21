import { screen } from '@testing-library/dom';
import { render, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { ShowSingleRepo } from './ShowSingleRepo';
import { createMemoryHistory } from 'history';
import { server, rest } from '../../mocks/server';

const history = createMemoryHistory();

test('should render the correct repo details', async () => {
  render(
    <Router history={history}>
      <ShowSingleRepo />
    </Router>
  );
  history.push('/1');
  await waitFor(() => screen.getByText('Repo One'));
  expect(screen.getByText('repo one description'));
  expect(screen.getByText('url'));
  expect(screen.getByTestId('fork-icon')).toHaveTextContent('2');
  expect(screen.getByTestId('issues-icon')).toHaveTextContent('0');
  expect(screen.getByTestId('watchers-icon')).toHaveTextContent('10');
  expect(screen.getByText('Javascript'));
});

test('should render error message when fetch failing', async () => {
  server.use(
    rest.get(
      'https://api.github.com/orgs/godaddy/repos',
      async (req, res, ctx) => {
        return res(ctx.status(400));
      }
    )
  );
  render(
    <Router history={history}>
      <ShowSingleRepo />
    </Router>
  );

  await waitFor(() =>
    screen.getByText('Sorry, there was an error. Try again later')
  );
});
