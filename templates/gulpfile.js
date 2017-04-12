var balm = require('balm');

// https://github.com/balmjs/balm/blob/master/docs/configuration.md
balm.config = {
  roots: {
    source: 'app'
  }
};

balm.go();
