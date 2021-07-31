const withImages = require("next-images");

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    webpack: function (config) {
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader",
      });
      return config;
    },
    ...withImages(defaultConfig),
    reactStrictMode: true,
  };
};
