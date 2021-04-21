import { screen } from '@testing-library/dom';
import { render, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { ShowSingleRepo } from './ShowSingleRepo';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

beforeEach(() => {
  render(
    <Router history={history}>
      <ShowSingleRepo />
    </Router>
  );
});

test('should render the correct repo details', async () => {
  history.push('/1');
  await waitFor(() => screen.getByText('Repo One'));
  expect(screen.getByText('repo one description'));
  expect(screen.getByText('url'));
  expect(screen.getByTestId('fork-icon')).toHaveTextContent('2');
  expect(screen.getByTestId('issues-icon')).toHaveTextContent('0');
  expect(screen.getByTestId('watchers-icon')).toHaveTextContent('10');
  expect(screen.getByText('Javascript'));
});
