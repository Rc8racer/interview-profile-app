
export default {
  basePath: 'http://rc8racer.github.io/interview-profile-app',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
