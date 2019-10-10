import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Typography, makeStyles } from '@material-ui/core';

import { State } from '../state/app.reducer';
import { getRandomCard } from '../state/app.actions';
import { CardsListComponent } from '../components/cards-list/cards-list.component';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const RandomCardPage = () => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const loading = useSelector<State, boolean>((state) => state.cards.loading);
  const error = useSelector<State, string>((state) => state.cards.error);

  React.useEffect(() => {
    getRandomCard()(dispatch);
  }, [dispatch]);

  return (
    <div className={classes.root}>
      {!loading && <Typography variant='h2'>Random MTG Cards</Typography>}
      {!error && <CardsListComponent />}
      {error && <Typography>Error: {error}</Typography>}
      {!loading && (
        <Button variant='contained' color='primary' onClick={() => getRandomCard()(dispatch)}>
          Show Another
        </Button>
      )}
    </div>
  );
};

export { RandomCardPage };
