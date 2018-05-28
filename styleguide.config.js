const path = require('path');

const overrides = require('react-app-rewired/config-overrides');

module.exports = {
  components: path.join(__dirname, './src/shared/components/**/*.{ts,tsx}'),
  propsParser: require('react-docgen-typescript').parse,
//  styleguideComponents: {
//    Wrapper: path.join(__dirname, "./src/styleguide/Wrapper.tsx")
//  },
  require: [
    path.join(__dirname, './src/index.scss'),
  ],
  title: 'so beautiful',
  webpackConfig: overrides.webpack(require('react-scripts-ts/config/webpack.config.dev.js')),
};