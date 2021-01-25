import path = require('path');
import Context from '@alib/build-scripts/lib/core/Context';

describe('config test suite', () => {
  const context = new Context({
    args: {},
    command: 'start',
    rootDir: path.join(__dirname, './fixtures/basic-spa/'),
    plugins: [
      path.join(__dirname, './fixtures/defaultConfig.ts'),
      [path.join(__dirname, '../src'), {
        'rax': 'rax'
      }]
    ]
  });

  test('check webpack config', async () => {
    const configArr = await context.setUp();
    const webpackConfig = configArr[0].chainConfig.toConfig();
    expect(webpackConfig.externals).toBeTruthy();
  });
});
