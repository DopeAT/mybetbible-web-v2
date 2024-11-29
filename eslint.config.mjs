// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import stylisticTs from '@stylistic/eslint-plugin-ts'

export default withNuxt(
  {
    plugins: {
      '@stylistic/ts': stylisticTs
    },
    rules: {
      'no-console': 1,
      'no-used-vars': 'off',
      '@stylistic/ts/indent': ['error', 2],
    }
  }
)
