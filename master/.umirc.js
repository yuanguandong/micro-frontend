export default {
  proxy: {
    "/api/app1": {
      target: "http://localhost:8001",
      changeOrigin: true,
    },
    "/api/app2": {
      target: "http://localhost:8002",
      changeOrigin: true,
    },
    // "/fwPlatform": {
    //   target: "http://10.226.108.75:32580",
    //   changeOrigin: true,
    // },
    // "/fwSecurity": {
    //   target: "http://10.226.108.75:32580",
    //   changeOrigin: true,
    // },
    // "/fwWorkflow": {
    //   target: "http://10.226.108.75:32580",
    //   changeOrigin: true,
    // },
  },
  antd: {},
  dva: {},
  qiankun: {
    master: {
      // sandbox: {
      //   experimentalStyleIsolation: true,
      // },
    },
  },
  routes: [
    {
      path: "/",
      component: "../layouts/index.js",
      routes: [
        {
          path: "/app2",
          exact: false,
          component: "./app2/index.js",
        },
        {
          path: "/super",
          microApp: "super",
          settings: {
            singular: false,
          },
          microAppProps: {
            autoSetLoading: true,
            className: "super",
            wrapperClassName: "wrappersuper",
          },
        },
        {
          path: "/iproject",
          microApp: "iproject",
          settings: {
            singular: false,
          },
          microAppProps: {
            autoSetLoading: true
          },
        },
        {
          path: "/",
          component: "./index.js",
        },
      ],
    },
  ],
  plugins: [],

  // chainWebpack: (memo, { env, webpack, createCSSRule }) => {
  //   console.log('memo',memo)
  //   memo.merge({
  //     module: {
  //       rules: [
  //         {
  //           loader: "less-loader",
  //           options: {
  //             modifyVars: {
  //               "@ant-prefix": "gantmaster",
  //             },
  //             javascriptEnabled: true,
  //           },
  //         },
  //       ],
  //     },
  //   });
  // },
};
