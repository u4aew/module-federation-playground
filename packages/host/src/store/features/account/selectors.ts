import { Fetch } from '@host/types';

/**
 * Информация о пользователе
 * @param state
 */
export const userSelector = (state) => state.account.user;

/**
 * Есть ли активный запрос к за инфоль к пользователю
 * @param state
 */
export const isLoadingUserSelector = (state): boolean => {
  return state.account.fetchingState === Fetch.Pending;
};
