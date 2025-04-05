
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'http://rc8racer.github.io/interview-profile-app',
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
    'index.csr.html': {size: 28372, hash: 'e693990466f2217eb08f2ff57de30cf61f2b9b01a6788bdf919de5372d7bc8fe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17508, hash: '6718c88599ef3edc3dd8db020aa82cf7b69f135dc8eb7e0723d06628d3993a3e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LSESIHYC.css': {size: 238444, hash: '7jqeFVnM7F8', text: () => import('./assets-chunks/styles-LSESIHYC_css.mjs').then(m => m.default)}
  },
};
