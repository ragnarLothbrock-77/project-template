import { Configuration } from 'webpack';
import webpack from 'webpack'
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from '../types/types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';



export const buildPlugins = ({ mode, paths, analizer }: BuildOptions) => {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html }) // add to object settings HTMLPlugin - favicon: path.resolve(paths.public, 'git.svg')
  ]

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin())
    // Проверка типов в отдельном процессе, сборка быстрее
    plugins.push(new ForkTsCheckerWebpackPlugin())
    plugins.push(new ReactRefreshWebpackPlugin())
  }

  if (isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash8].css",
      chunkFilename: "css/[name].[contenthash8].css",
    }))
    plugins.push(new CopyPlugin({
      patterns: [
        { from: path.resolve(paths.public, 'images'), to: path.resolve(paths.output, 'images') }
      ],
    }))
  }

  if (analizer) {
    plugins.push(new BundleAnalyzerPlugin())
  }


  return plugins;
}