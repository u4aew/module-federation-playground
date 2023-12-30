import { Transaction, TransactionDetails } from '@modules/transactions/types';

/**
 * Info about transactions
 * @param state
 */

export const userTransactionsSelector = (state): Transaction[] =>
  state.transactions.list;
export const userTransactionDetailsSelector = (state): TransactionDetails =>
  state.transactions.details;
