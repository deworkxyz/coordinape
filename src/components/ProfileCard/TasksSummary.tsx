import { FC } from 'react';

import { makeStyles, Typography } from '@material-ui/core';

import { RightArrowIcon } from 'icons';

export interface Task {
  id: string;
  name: string;
  permalink: string;
}

interface Props {
  tasks: Task[];
}

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'left',
    marginTop: theme.spacing(1),
    padding: theme.spacing(1.5),
    backgroundColor: theme.colors.white,
    borderRadius: 8,
  },
  title: {
    textTransform: 'uppercase',
    color: theme.colors.lightText,
    fontWeight: 600,
  },
  taskItem: {
    display: 'flex',
    alignItems: 'center',
    color: theme.colors.mediumGray,
    transition: 'color 200ms ease-out',
    '&:hover': {
      color: theme.colors.text,
    },
  },
  taskName: {
    flex: 1,
    fontWeight: 600,
  },
}));

export const TasksSummary: FC<Props> = ({ tasks }) => {
  const classes = useStyles();
  if (!tasks.length) return null;
  return (
    <div className={classes.root}>
      <Typography variant="body2" className={classes.title}>
        Completed Tasks
      </Typography>
      {tasks.map(task => (
        <a
          key={task.id}
          href={task.permalink}
          target="_blank"
          rel="noreferrer"
          className={classes.taskItem}
        >
          <Typography variant="body2" className={classes.taskName}>
            {task.name}
          </Typography>
          <RightArrowIcon size="md" />
        </a>
      ))}
    </div>
  );
};
