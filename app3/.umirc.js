export default {
  publicPath: '/app3/',
  outputPath: './dist/app3',
  mountElementId: 'app3',
  qiankun: {
    slave: {},
  },
  // plugins: [
  //   require.resolve('../../../plugin-model/lib'),
  //   require.resolve('../../../plugin-antd/lib'),
  //   require.resolve('../../../plugin-qiankun/lib'),
  // ],
  antd:{},
  dva:{},
  // TODO 测试约定式路由
  routes: [
    { path: '/', exact: true, component: './index.js' },
    { path: '/users',exact: true, component: './user/index.js' },
    { path: '/:abc', component: './$abc.js' },
    
  ],
  // TODO 测试 dynamicImport
  // dynamicImport: true,
};
