import { combineReducers } from 'redux';

import { cardsReducer, CardsState } from './cards/cards.reducer';

export type State = { cards: CardsState };
export const reducer = combineReducers({ cards: cardsReducer });
