
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Rc8racer.github.io/interview-profile-app/',
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
    'index.csr.html': {size: 28374, hash: '4af7946aaddc722ae8945f280c2c1909ec22d5cfad0362e654e42b8930882ab5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17510, hash: '0920a6449235a9401499edc790c4398f0e7ffe0af8415441afca4e66d6635106', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LSESIHYC.css': {size: 238444, hash: '7jqeFVnM7F8', text: () => import('./assets-chunks/styles-LSESIHYC_css.mjs').then(m => m.default)}
  },
};
