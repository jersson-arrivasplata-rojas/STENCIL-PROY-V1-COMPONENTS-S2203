import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  namespace: 'sami',
  srcDir: 'src',
  globalStyle: 'src/global/base.scss',
  globalScript: 'src/global/app.ts',
  nodeResolve: {
      browser: true,
      preferBuiltins: true
  },
  rollupPlugins: {
      after: [
        nodePolyfills()
      ]
  },
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/variables.scss',
        'src/global/mixins.scss'
      ]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
      dir: 'output',
      strict: true
    },
    {
      type: 'docs-json',
      file: 'path/to/docs.json'
    },
    {
      type: 'www',
      /*copy: [
        {
          src: '../node_modules/html2canvas/dist/html2canvas.js',
          dest: 'lib/html2canvas.js'
        },
        {
          src: '../node_modules/sweetalert2/dist/sweetalert2.js',
          dest: 'lib/sweetalert2.js'
        },
        {
          src: '../node_modules/@highlightjs/cdn-assets/highlight.js',
          dest: 'lib/highlight.js'
        },
        {
          src: '../node_modules/@highlightjs/cdn-assets/styles/default.min.css',
          dest: 'lib/default.min.css'
        }
      ],*/
      baseUrl: 'http://localhost:8016/',
      prerenderConfig: './prerender.config.ts',
      serviceWorker: null, // disable service workers
    },
  ],
};
