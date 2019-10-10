import React from 'react';
import { useDispatch } from 'react-redux';

import { getRandomCard } from '../state/app.actions';
import { CardsListComponent } from '../components/cards-list/cards-list.component';

const RandomCardPage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    getRandomCard()(dispatch);
  }, [dispatch]);

  return <CardsListComponent />;
};

export { RandomCardPage };
