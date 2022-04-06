import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'sami',
  srcDir: 'src',
  globalStyle: 'src/global/base.scss',
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
      baseUrl: 'http://localhost:8016/',
      prerenderConfig: './prerender.config.ts',
      serviceWorker: null, // disable service workers
    },
  ],
};
