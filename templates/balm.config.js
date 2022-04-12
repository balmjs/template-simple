const path = require('path');

const workspace = __dirname;

function resolve(dir) {
  return path.join(workspace, dir);
}

const appRoot = 'app';

// Documentation - https://balm.js.org/docs/config/
// 中文文档 - https://balm.js.org/docs/zh/config/
module.exports = {
  roots: {
    source: appRoot
  },
  styles: {
    extname: 'css' // Default use PostCSS
  },
  scripts: {
    entry: `./${appRoot}/scripts/index.js`,
    alias: {
      '@': resolve(`${appRoot}/scripts`)
    }
  },
  assets: {
    cache: true
  }
  // More Config
};
