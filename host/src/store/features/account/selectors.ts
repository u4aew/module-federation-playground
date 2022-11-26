import { createSelector } from '@reduxjs/toolkit';

/**
 * Информация о пользователе
 * @param state
 */

// @ts-ignore
export const userNameSelector = (state): state => state.account.userName;
