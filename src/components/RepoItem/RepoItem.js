import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link as LinkRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';

import {
  RepoIcon,
  RepoForkedIcon,
  IssueOpenedIcon,
  EyeIcon,
} from '@primer/octicons-react';

import { makeStyles } from '@material-ui/core/styles';

const grey = '#586069';

const useStyles = makeStyles({
  mainContainer: {
    justifyContent: 'center',
    marginTop: '4rem',
    padding: '1rem',
  },
  repoTypography: {
    color: '#0366d6',
    fontWeight: '700',
    marginLeft: '5px',
  },
  descriptionTypography: {
    color: grey,
    fontSize: '0.90rem',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.35rem',
  },
  iconsContainer: {
    color: grey,
    display: 'flex',
    alignItems: 'center',
    '& p': {
      marginLeft: '4px',
      fontWeight: 700,
    },
  },
  linkItem: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

export const RepoItem = ({
  repo,
  showDetails,
  handleShowSingleRepoDetails,
}) => {
  const classes = useStyles();

  const renderSimpleRepo = () => {
    return (
      <ListItem
        key={repo.id}
        onClick={() => handleShowSingleRepoDetails(repo.id)}
        to={`${repo.id}`}
        component={LinkRouter}
        className={classes.linkItem}
      >
        <div className={classes.titleContainer}>
          <RepoIcon verticalAlign='middle' fill='#586069' />
          <Typography className={classes.repoTypography}>
            {repo.name}
          </Typography>
        </div>
      </ListItem>
    );
  };

  return (
    <>
      {repo && !showDetails && renderSimpleRepo()}
      {repo && showDetails && (
        <Grid container className={classes.mainContainer}>
          <Grid item style={{ textAlign: 'left' }}>
            <Card>
              <CardContent>
                <div className={classes.titleContainer}>
                  <RepoIcon verticalAlign='middle' fill='#586069' />
                  <Typography className={classes.repoTypography}>
                    {repo.name}
                  </Typography>
                </div>
                <Typography
                  className={classes.descriptionTypography}
                  gutterBottom
                >
                  {repo.description}
                </Typography>
                <Typography gutterBottom>
                  <Link href={repo.html_url}>{repo.html_url}</Link>
                </Typography>

                <Grid container spacing={3}>
                  <Grid
                    item
                    className={classes.iconsContainer}
                    data-testid='fork-icon'
                  >
                    <RepoForkedIcon />
                    <Typography>{repo.forks}</Typography>
                  </Grid>
                  <Grid
                    item
                    className={classes.iconsContainer}
                    data-testid='issues-icon'
                  >
                    <IssueOpenedIcon />
                    <Typography>{repo.open_issues}</Typography>
                  </Grid>
                  <Grid
                    item
                    className={classes.iconsContainer}
                    data-testid='watchers-icon'
                  >
                    <EyeIcon />
                    <Typography>{repo.watchers}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                      <strong>Language:</strong> {repo.language}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
};
