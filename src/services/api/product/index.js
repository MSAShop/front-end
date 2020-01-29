const Api = require('@services/api');

Api.config({ baseURL: process.env.TRADESK_URL });

exports.getAll = () => {
  return Api.useRequest({ method: 'GET', url: 'products' });
};
