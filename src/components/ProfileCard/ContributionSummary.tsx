import { FC } from 'react';

import { makeStyles, Typography } from '@material-ui/core';

import { ContributionUser } from 'hooks/useContributions';
import { DeworkIcon, RightArrowIcon } from 'icons';

interface Props {
  contributions: ContributionUser;
}

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0),
  },
  list: {
    borderRadius: 8,
    backgroundColor: theme.colors.white,
  },
  title: {
    textTransform: 'uppercase',
    color: theme.colors.lightText,
    fontWeight: 600,
    marginBottom: theme.spacing(0.5),
  },
  row: {
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    padding: theme.spacing(0.25, 1.5),
    marginBottom: theme.spacing(0.5),
    color: theme.colors.mediumGray,
    borderRadius: 8,
    backgroundColor: theme.colors.white,
    textDecoration: 'none',
    transition: 'all 200ms ease-out',
    '&:hover': {
      color: theme.colors.text,
      textDecoration: 'underline',
    },
  },
  rowTitle: {
    flex: 1,
    fontWeight: 600,
    margin: theme.spacing(0, 1),
  },
  seeAllText: {
    color: theme.colors.lightText,
  },
}));

export const ContributionSummary: FC<Props> = ({ contributions }) => {
  const classes = useStyles();
  if (!contributions.contributions.length) return null;
  return (
    <div className={classes.root}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2" className={classes.title}>
          Contributions ({contributions.contributions.length})
        </Typography>
        <a
          href={contributions.contribution_details_link}
          target="_blank"
          rel="noreferrer"
          className={classes.seeAllText}
        >
          <Typography variant="body2">See all</Typography>
        </a>
      </div>
      {contributions.contributions.slice(0, 3).map((contribution, index) => (
        <a
          key={index}
          href={contribution.link}
          target="_blank"
          rel="noreferrer"
          className={classes.row}
        >
          <DeworkIcon size="md" />
          <Typography variant="body2" className={classes.rowTitle}>
            {contribution.title}
          </Typography>
          {!Math.random() && <RightArrowIcon size="md" />}
        </a>
      ))}
    </div>
  );
};
