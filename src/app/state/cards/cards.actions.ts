import axios from 'axios';

import { MagicCard } from '../../models/MagicCard';

type GetRandomCardStart = { type: 'GET_RANDOM_CARD_START' };
type GetRandomCardSuccess = { type: 'GET_RANDOM_CARD_SUCCESS'; payload: MagicCard };
type GetRandomCardFail = { type: 'GET_RANDOM_CARD_FAILURE'; payload: string };

export type GetRandomCard = GetRandomCardStart | GetRandomCardSuccess | GetRandomCardFail;

export const getRandomCard = () => (dispatch: (action: GetRandomCard) => void) => {
  dispatch({ type: 'GET_RANDOM_CARD_START' });
  axios
    .get<MagicCard>('https://api.scryfall.com/cards/random')
    .then((res) => dispatch({ type: 'GET_RANDOM_CARD_SUCCESS', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_RANDOM_CARD_FAILURE', payload: err.status }));
};
