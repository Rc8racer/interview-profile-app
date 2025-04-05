
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/interview-profile-app/',
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
    'index.csr.html': {size: 28348, hash: '0f1befed179e0dd11b32dacc6bb39309366ae23acf6955430329ad8e63025914', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17484, hash: '0e0eb8fd6f448183e2d5389b3fd89275eeca68aaa18d776aaf3f424abda20934', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LSESIHYC.css': {size: 238444, hash: '7jqeFVnM7F8', text: () => import('./assets-chunks/styles-LSESIHYC_css.mjs').then(m => m.default)}
  },
};
