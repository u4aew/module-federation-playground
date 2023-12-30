export interface Transaction {
  id: number;
  date: string;
  sum: string;
  currency: string;
}

export interface TransactionDetails {
  transactionId: number;
  date: string;
  sum: string;
  currency: string;
  recipientName: string;
  recipientAccount: string;
  senderName: string;
  senderAccount: string;
  transactionType: string;
  description: string;
  status: string;
}
