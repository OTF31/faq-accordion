'use client'

import { MantineThemeOverride, createTheme } from '@mantine/core'
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const theme: MantineThemeOverride = createTheme({
  breakpoints: { xs: '23.4375em', sm: '48em', md: '62em', lg: '75em', xl: '90em' },
  fontFamily: workSans.style.fontFamily,
})

export { theme }
