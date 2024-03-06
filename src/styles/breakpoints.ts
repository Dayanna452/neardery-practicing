import { MantineThemeOverride, em } from "@mantine/core"

export const breakpoints: MantineThemeOverride["breakpoints"] = {
  xs: em("0px"),
  sm: em("640px"),
  md: em("768px"),
  lg: em("1024px"),
  xl: em("1280px"),
}