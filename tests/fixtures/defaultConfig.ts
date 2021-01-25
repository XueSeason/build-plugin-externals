import path = require('path');
import Config = require('webpack-chain');
import { IPlugin } from '@alib/build-scripts/lib';

const plugin: IPlugin = ({ registerTask, context }) => {
  const { rootDir } = context;
  const config = new Config();
  config.mode('production');
  config.entry('index').add(path.join(rootDir, 'src/index.tsx'));
  config.output.path(path.join(rootDir, 'build'));
  registerTask('web', config);
};

export default plugin;
