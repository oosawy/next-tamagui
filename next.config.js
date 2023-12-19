const { withTamagui } = require('@tamagui/next-plugin')

module.exports = function (name, { defaultConfig }) {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    ...defaultConfig,
  }

  const tamaguiPlugin = withTamagui({
    config: './tamagui.config.ts',
    appDir: true,
    components: ['tamagui'],
    // build-time generate CSS styles for better performance
    // we recommend only using this for production so you get reloading during dev mode
    outputCSS:
      process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,

    // optional advanced settings:

    // set to false if you never call addTheme or updateTheme
    // when combined with outputCSS this saves you 1Kb more bundle size
    doesMutateThemes: true, // default true
  })

  return {
    ...nextConfig,

    ...tamaguiPlugin(nextConfig),
  }
}
