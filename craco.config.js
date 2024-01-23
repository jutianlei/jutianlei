const config = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // 自定义 webpack 配置
      // 您可以在这里修改 webpackConfig 对象以满足您的需求
      if (env === "production") {
        // 设置 publicPath
        webpackConfig.output.publicPath = "/jutianlei";
      }

      // 返回修改后的 webpack 配置
      return webpackConfig;
    },
  },
};

module.exports = config;
