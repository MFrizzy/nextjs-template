const withPlugins = require("next-compose-plugins");
const withTM = require('next-transpile-modules');

// const plugins = [withTM(["lodash-es"])]
const plugins = [];

module.exports = withPlugins(plugins, {
  env: {
    name: "Nextjs Template"
  },
});
