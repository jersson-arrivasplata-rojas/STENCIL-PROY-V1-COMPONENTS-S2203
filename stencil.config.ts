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
    },
    {
      type: 'www',
      baseUrl: 'http://localhost:8016/',
      prerenderConfig: './prerender.config.ts',
      serviceWorker: null, // disable service workers
    },
  ],
};
