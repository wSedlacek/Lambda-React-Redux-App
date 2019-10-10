import { MagicCard } from '../../models/MagicCard';
import { GetRandomCard } from './cards.actions';

export type CardsState = {
  list: MagicCard[];
  error: string;
  loading: boolean;
};

const initialState: CardsState = {
  list: [],
  error: '',
  loading: false,
};

export const cardsReducer = (state = initialState, action: GetRandomCard) => {
  switch (action.type) {
    case 'GET_RANDOM_CARD_START':
      return { ...state, error: '', loading: true };
    case 'GET_RANDOM_CARD_SUCCESS':
      return { ...state, error: '', loading: false, list: [action.payload] };
    case 'GET_RANDOM_CARD_FAILURE':
      return { ...state, error: action.payload, loading: false, list: [] };
    default:
      return state;
  }
};
