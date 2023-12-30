import { CardDetails } from '@modules/cards/types';

/**
 * Info about cards
 * @param state
 */

export const userCardsSelector = (state) => state.cards.list;
export const userCardsDetailsSelector = (state): CardDetails =>
  state.cards.details;
