import React from 'react';
import { useSelector } from 'react-redux';

import { MagicCard } from '../../models/MagicCard';
import { State } from '../../state/app.reducer';
import { MagicCardComponent } from '../magic-card/magic-card.component';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'grid',
    justifyContent: 'center',
  },
});

const CardsListComponent = () => {
  const cards = useSelector<State, MagicCard[]>((state) => state.cards.list);
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      {cards.map((card) => (
        <MagicCardComponent key={card.id} card={card} />
      ))}
    </div>
  );
};

export { CardsListComponent };
