import React from 'react';
import { useSelector } from 'react-redux';

import { MagicCard } from '../../models/MagicCard';
import { State } from '../../state/app.reducer';
import { MagicCardComponent } from '../magic-card/magic-card.component';
import { makeStyles, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CardsListComponent = () => {
  const cards = useSelector<State, MagicCard[]>((state) => state.cards.list);
  const loading = useSelector<State, boolean>((state) => state.cards.loading);
  const classes = useStyles({});

  if (loading)
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );

  return (
    <div className={classes.root}>
      {cards.map((card) => (
        <MagicCardComponent key={card.id} card={card} />
      ))}
    </div>
  );
};

export { CardsListComponent };
