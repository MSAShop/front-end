const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  webpack (config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@root' : path.join(__dirname, '.'),
      '@utils' : path.join(__dirname, './src/utils'),
      '@components' : path.join(__dirname, './src/components'),
      '@pages-style' : path.join(__dirname, './src/pages-style'),
      '@services' : path.join(__dirname, './src/services'),
    }
    
    return config;
  },
  useFileSystemPublicRoutes: false,
  env: {
    TRADESK_URL: process.env.TRADESK_URL
  }
};
