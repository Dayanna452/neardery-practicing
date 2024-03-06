import { MantineThemeOverride, rem } from "@mantine/core"

export const fontSizes: MantineThemeOverride["fontSizes"] = {
  xs: rem(10),
  sm: rem(13),
  "sm-lg": rem(14),
  md: rem(15),
  "md-lg": rem(16),
  lg: rem(18),
  xl: rem(20),
  xxl: rem(24),
}

export const lineHeights: MantineThemeOverride["lineHeights"] = {
  xs: rem(16),
  sm: rem(20),
  md: rem(24),
  lg: rem(32),
  xl: rem(32),
}