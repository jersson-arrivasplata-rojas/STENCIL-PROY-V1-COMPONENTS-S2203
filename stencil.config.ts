import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'sami',
  globalStyle: 'src/globals/base.scss',
  outputTargets: [
    {
      type: 'dist',
     // esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }/*,
    angularOutputTarget({
      componentCorePackage: 'sami',
      directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
    })*/
  ],
  plugins: [
    sass({

      injectGlobalPaths: [
        'src/globals/variables.scss',
        'src/globals/mixins.scss'
      ]
    })
  ],
};
