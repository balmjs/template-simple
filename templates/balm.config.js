const path = require('path');

// Documentation - https://balmjs.com/docs/v2/config/
// 中文文档 - https://balmjs.com/docs/v2/zh/config/
module.exports = {
  roots: {
    source: 'app'
  },
  styles: {
    extname: 'css' // Default use PostCSS
  },
  scripts: {
    entry: './app/scripts/index.js',
    alias: {
      '@': path.resolve(__dirname, 'app/scripts')
    }
  }
  // More Config
};
