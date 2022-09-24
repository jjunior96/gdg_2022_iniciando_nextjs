module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials', 'storybook-addon-next-router'],
  webpackFinal: async (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    })

    return config
  }
}
