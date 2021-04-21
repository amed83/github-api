import { screen } from '@testing-library/dom';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ShowAllRepo } from './ShowAllRepo';

beforeEach(() => {
  render(
    <Router>
      <ShowAllRepo />
    </Router>
  );
});

test('should render the correct number of repo', async () => {
  await waitFor(() => screen.getByRole('list'));
  expect(screen.getByText('Repo One')).toBeInTheDocument();
  expect(screen.getByText('Repo Two')).toBeInTheDocument();
  expect(screen.getByText('Repo Three')).toBeInTheDocument();
});
