import React from 'react';
import { useSelector } from 'react-redux';

import { MagicCard } from '../../models/MagicCard';
import { State } from '../../state/app.reducer';
import { MagicCardComponent } from '../magic-card/magic-card.component';

const CardsListComponent = () => {
  const cards = useSelector<State, MagicCard[]>((state) => state.cards.list);

  return (
    <>
      {cards.map((card) => (
        <MagicCardComponent card={card} />
      ))}
    </>
  );
};

export { CardsListComponent };
