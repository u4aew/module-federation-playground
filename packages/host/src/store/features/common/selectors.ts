import { Fetch } from '@host/types';
import { types as SharedTypes } from 'shared';

/**
 * Info about user
 * @param state
 */
export const userSelector = (state): SharedTypes.TypeUser => state.common.user;

/**
 * Has request to user info
 * @param state
 */
export const isLoadingUserSelector = (state): boolean => {
  return state.common.fetchingState === Fetch.Pending;
};
