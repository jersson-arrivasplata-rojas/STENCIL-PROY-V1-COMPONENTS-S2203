import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { apiSpecGenerator } from './scripts/api-spec-generator';


export const config: Config = {
  namespace: 'sami',
  srcDir: 'src',
  bundles: [
    { components: ['sami-img'] },
    { components: ['sami-paragraph'] },
    { components: ['sami-tag'] },
    { components: ['sami-card-image'] }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        //'src/themes/ionic.skip-warns.scss'
      ]
    })
  ],
  outputTargets: [
    {
      type: 'docs-vscode',
      file: 'dist/html.html-data.json',
      sourceCodeBaseUrl: '',//https://github.com/ionic-team/ionic/tree/main/core/
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      copy: [{
        src: '../scripts/custom-elements',
        dest: 'components',
        warn: true
      }],
      includeGlobalScripts: false
    },
    {
      type: 'docs-readme',
      strict: true
    },
    {
      type: 'docs-json',
      file: '../docs/core.json'
    },
    {
      type: 'dist-hydrate-script'
    },
    apiSpecGenerator({
      file: 'api.txt'
    }) as any,
    // {
    //   type: 'stats',
    //   file: 'stats.json'
    // },
  ],
  buildEs5: 'prod',
  extras: {
    dynamicImportShim: true,
    initializeNextTick: true,
    scriptDataOpts: true
  },
  testing: {
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec)|[//](e2e))\\.[jt]sx?$',
    allowableMismatchedPixels: 200,
    pixelmatchThreshold: 0.05,
    waitBeforeScreenshot: 20,
    moduleNameMapper: {
      "@utils/test": ["<rootDir>/src/utils/test/utils"],
      "@utils/logging": ["<rootDir>/src/utils/logging"],

    },
    emulate: [
      {
        userAgent: 'iPhone',
        viewport: {
          width: 400,
          height: 800,
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
          isLandscape: false
        }
      },
      {
        userAgent: 'Android',
        viewport: {
          width: 400,
          height: 800,
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
          isLandscape: false
        }
      }
    ]
  },
  globalStyle: 'src/global/base.scss',
  preamble: '(C) Sami http://sami.jerssonarrivasplata.com/ - Todos los derechos reservados',
  //globalScript: 'src/global/ionic-global.ts',
  enableCache: true,
  devServer: {
    reloadStrategy: 'pageReload',
    address:'0.0.0.0',
    port: 8017
  }
};
