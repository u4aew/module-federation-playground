export type CardDetails = {
  pan: string;
  expiry: string;
  cardHolderName: string;
  paymentSystem: string;
  cardType: string;
  issuingBank: string;
  creditLimit: string;
  availableBalance: string;
  securityFeatures: string[];
  linkedAccount: string;
  recentTransactions: Transaction[];
};

export type Transaction = {
  date: string;
  amount: string;
  currency: string;
  description: string;
};

export type CardInfo = {
  id: number;
  pan: string;
  expiry: string;
  name: string;
};
