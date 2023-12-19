/**
 * Информация о транзакциях
 * @param state
 */

export const userTransactionsSelector = (state) => state.transactions.list;
export const userTransactionDetailsSelector = (state) =>
  state.transactions.details;
