import { BuildOptions } from "../types/types"

export const buildDevServer = (options: BuildOptions) => {
  return {
    port: options.port,
    open: true,
    hot: true,
    // Если раздавать статикку в nginx то надо делать проксирование index.html
    historyApiFallback: true
  }
}