var balm = require('balm');

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
    ext: 'css', // PostCSS
    autoprefixer: ['last 2 versions']
  },
  scripts: {
    entry: {
      main: './app/scripts/main.js' // entry js file
    }
  }
  // More Config
  // https://github.com/balmjs/balm/blob/master/docs/configuration.md
};

balm.go();
