const withPlugins = require("next-compose-plugins");
const withTM = require('next-transpile-modules');

const plugins = [withTM(["lodash-es"])]

module.exports = withPlugins(plugins, {
  future: {
    webpack5: true,
  },
});
