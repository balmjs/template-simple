const path = require('path');
const balm = require('balm');

// Documentation - http://balmjs.com/docs/en/configuration/toc.html
// 中文文档 - http://balmjs.com/docs/zh-cn/configuration/toc.html
balm.config = {
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'styles',
      js: 'scripts',
      img: 'images'
    }
  },
  styles: {
    ext: 'css' // Default use PostCSS
  },
  scripts: {
    entry: {
      main: './app/scripts/main.js' // Entry js file
    },
    alias: {
      '@': path.resolve(__dirname, '../app/scripts')
    }
  }
  // More Config
};

balm.go();
