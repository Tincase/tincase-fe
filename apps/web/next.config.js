const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@tincase/ui'],
  i18n,
};
