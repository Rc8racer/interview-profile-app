
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'http://Rc8racer.github.io/interview-profile-app',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/features/profiles/profiles.module.ts": [
    {
      "path": "chunk-57YEJXNJ.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 28372, hash: '50cab342cabd9e14427524422a9f88a7ac60007baf51169a96c304b5de1a5c9b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17508, hash: '4eb71bf787d9ea91a9e9dc04a24c37ef5b7fe7e1843e6bf12a9b7210122dce99', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LSESIHYC.css': {size: 238444, hash: '7jqeFVnM7F8', text: () => import('./assets-chunks/styles-LSESIHYC_css.mjs').then(m => m.default)}
  },
};
