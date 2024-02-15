import { BuildOptions } from "../types/types"

export const buildResolver = (options: BuildOptions) => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.paths.src
    }
  }
}