import path from 'path';
import { buildLoaders } from './builds/buildLoaders';
import { buildPlugins } from './builds/buildPlugins';
import { buildResolver } from './builds/buildResolver';
import { buildDevServer } from './builds/buildDevServer';
import { BuildOptions } from './types/types';


export const buildWebpackConfig = (options: BuildOptions) => {
  return {
    mode: options.mode,
    entry: path.resolve(options.paths.entry),
    devtool: 'inline-source-map',
    output: {
      path: path.resolve(options.paths.output),
      filename: '[name].[hash].js',
      clean: true
    },
    module: {
      rules: buildLoaders(options)
    },
    plugins: buildPlugins(options),
    devServer: buildDevServer(options),
    resolve: buildResolver(options)
  }
}