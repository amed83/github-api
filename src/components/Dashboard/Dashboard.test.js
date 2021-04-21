import { Dashboard } from './Dashboard';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

const server = setupServer(
  rest.get('https://api.github.com/orgs/godaddy/repos', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: 'Repo One',
          description: 'repo description',
          html_url: 'url',
          forks: 2,
          open_issues: 0,
          watchers: 10,
        },
        { id: 2 },
        { id: 8 },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());
beforeEach(() => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
});

test('should render the correct number of repo', async () => {
  await waitFor(() => screen.getByRole('list'));
  expect(screen.getByRole('list').children).toHaveLength(3);
});

test('should render repo details when click on a single repo', async () => {
  const repoItem = await waitFor(() => screen.getByText('Repo One'));
  userEvent.click(repoItem);
  expect(screen.getByText('Repo One')).toBeInTheDocument();
  expect(screen.getByText('url')).toBeInTheDocument();
  expect(screen.getByText('repo description')).toBeInTheDocument();
  //fork
  const forkItem = screen.getByTestId('fork-icon');
  expect(forkItem.children[1].textContent).toBe('2');
  //open issues
  const openIssuesItem = screen.getByTestId('issues-icon');
  expect(openIssuesItem.children[1].textContent).toBe('0');
  //watchers
  const watchersItem = screen.getByTestId('watchers-icon');
  expect(watchersItem.children[1].textContent).toBe('10');
});
