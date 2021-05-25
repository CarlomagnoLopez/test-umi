import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,

  routes: [

    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/users', component: '../pages/containerlist', title: "User" },
        { path: '/repos', component: '../pages/containerlist', title: "Repo" },
        { path: '/', component: '../pages/index', title: "Home" },
      ]
    },
  ],
  // favicon: '/assets/favicon.ico',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      // dva: true,
      dva: {
        immer: true
      },
      
      dynamicImport: false,
      title: 'Home',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
