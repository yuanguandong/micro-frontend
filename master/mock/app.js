export default {
  'GET /api/apps': [
    {
      name: 'app1',
      entry: 'http://localhost:8001/app1',
      to: '/app1',
      props: {
        testProp1: 'test1',
      },
    },
    {
      name: 'app2',
      entry: 'http://localhost:8002/app2',
      to: '/app2',
      props: {
        testProp2: 'test2',
      },
    },
    {
      name: 'super',
      entry: 'http://localhost:19090/login',
      to: '/super/login',
    },
  ],
};
