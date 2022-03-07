const CracoLessPlugin = require("craco-less");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
    { plugin: new AntdDayjsWebpackPlugin() },
  ],
  webpack: {
    configure: (webpackConfig, { env }) => {
      const publicPathMap = {
        production: "/public/assets/",
        development: "/",
      };
      webpackConfig.output = {
        ...webpackConfig.output,
        publicPath: publicPathMap[env],
      };
      return webpackConfig;
    },
    alias: {
      "@src": path.join(__dirname, "./src"),
    },
  },
  devServer: {
    proxy: {
      "/proxy": {
        target: "http://127.0.0.1:5001",
        changeOrigin: true,
        pathRewrite: { "^/proxy": "" },
      },
    },
  },
};
