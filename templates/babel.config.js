module.exports = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime'],
  env: {
    test: {
      presets: ['@babel/preset-env']
    }
  }
};
