import { screen } from '@testing-library/dom';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ShowAllRepo } from './ShowAllRepo';
import { server, rest } from '../../mocks/server';

test('should render the correct number of repo', async () => {
  render(
    <Router>
      <ShowAllRepo />
    </Router>
  );

  await waitFor(() => screen.getByRole('list'));
  expect(screen.getByText('Repo One')).toBeInTheDocument();
  expect(screen.getByText('Repo Two')).toBeInTheDocument();
  expect(screen.getByText('Repo Three')).toBeInTheDocument();
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
    <Router>
      <ShowAllRepo />
    </Router>
  );
  await waitFor(() =>
    screen.getByText('Sorry, there was an error. Try again later')
  );
});
