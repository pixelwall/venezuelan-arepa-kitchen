const color = '#FFFFFF'

const iconsProps = {
  // background: color,
  offset: 5,
}

module.exports = {
  appName: 'Arepa Venezuelan Kitchen',
  appShortName: 'Arepa Venezuelan Kitchen',
  appDescription: 'Arepa Venezuelan Kitchen Web App',

  developerName: '',
  developerURL: '',

  path: '/favicons/',

  background: color,
  theme_color: color,
  appleStatusBarStyle: 'default',

  scope: '/',
  start_url: '/',

  display: 'standalone',
  orientation: 'portrait',

  logging: false,
  html: 'icons.html',
  pipeHTML: true,
  replace: true,

  icons: {
    android: {
      ...iconsProps,
    },
    appleIcon: {
      ...iconsProps,
    },
    appleStartup: {
      ...iconsProps,
      offset: 10
    },
    favicons: {
      ...iconsProps,
    },
    firefox: {
      ...iconsProps,
      offset: 10,
      overlayGlow: false
    },
    windows: {
      ...iconsProps,
    },
  }
}
