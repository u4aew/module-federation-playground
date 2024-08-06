const MAIN_PATH = 'https://mock.fancy-app.site/api/micro';

const config = {
  routes: {
    transactions: `${MAIN_PATH}/transactions/list`,
    transactionDetails: `${MAIN_PATH}/transactions/details`,
  },
};

export default config;
