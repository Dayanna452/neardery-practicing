import { createTheme } from "@mantine/core"
import { colors } from "./colors"
import { fontSizes, lineHeights } from "./typography"
import { breakpoints } from "./breakpoints"

export const mantineTheme = createTheme({
  colors,
  fontSizes,
  lineHeights,
  breakpoints,
  fontFamily: '"DM Sans", sans-serif',
})