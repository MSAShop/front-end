const path = require('path');

module.exports = {
  webpack (config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@root' : path.join(__dirname, '.'),
      '@utils' : path.join(__dirname, './src/utils'),
      '@components' : path.join(__dirname, './src/components'),
    }
    
    return config;
  }
};
