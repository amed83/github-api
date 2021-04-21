import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.github.com/orgs/godaddy/repos', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: 'Repo One',
          description: 'repo one description',
          html_url: 'url',
          forks: 2,
          open_issues: 0,
          watchers: 10,
          language: 'Javascript',
        },
        {
          id: 2,
          name: 'Repo Two',
          description: 'repo description',
          html_url: 'url',
          forks: 2,
          open_issues: 0,
          watchers: 10,
          language: 'Javascript',
        },
        {
          id: 3,
          name: 'Repo Three',
          description: 'repo description',
          html_url: 'url',
          forks: 2,
          open_issues: 0,
          watchers: 10,
          language: 'Javascript',
        },
      ])
    );
  }),
];
