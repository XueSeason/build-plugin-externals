import { IPlugin } from '@alib/build-scripts';
import { ExternalsElement, ExternalsObjectElement, ExternalsFunctionElement } from 'webpack';

type ExternalsOpts = string | RegExp | ExternalsObjectElement | ExternalsFunctionElement | ExternalsElement[];

const plugin: IPlugin = ({ onGetWebpackConfig }, options) => {
  onGetWebpackConfig((config) => {
    if (config.get('mode') === 'production' && options) {
      config.externals(options as ExternalsOpts);
    }
  });
};

export default plugin;
