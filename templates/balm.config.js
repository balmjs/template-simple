const path = require('path');

// Documentation - https://balm.js.org/docs/config/
// 中文文档 - https://balm.js.org/docs/zh/config/
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
