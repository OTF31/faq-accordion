module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '23.4375em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '90em',

        'dark-purple': '#301534',
        pink: '#AD28EB',
        'light-pink': '#F8EEFF',
        'pale-purple': '#8B6990',
      },
    },
  },
}
