import { MantineThemeOverride } from "@mantine/core"

const gray = [
  "#FFFFFF",
  "#F7F7FC",
  "#EFF0F6",
  "#D9DBE9",
  "#A0A3BD",
  "#6E7191",
  "#4E4B66",
  "#262338",
  "#14142B",
  "#DEE0ED",
] as const

const primary = [
  "#4F0000",
  "#550000",
  "#952020",
  "#AA3939",
  "#801515",
  "#D46A6A",
  "#D76E6E",
  "#FFAAAA",
  "#FFAFAF",
  "#FFB8B8",
] as const

const secondary = [
  "#F8CAD7",
  "#F4B0C2",
  "#F196AE",
  "#EB6E90",
  "#E6456F",
  "#D01C4C",
  // repeat to fill with 10 elements as mantine required
  "#D01C4C",
  "#D01C4C",
  "#D01C4C",
  "#D01C4C",
] as const

const tertiary = [
  "#FEFFE6",
  "#FFFFB8",
  "#FFF566",
  "#FADB14",
  "#AD8B00",
  "#614700",
  // repeat to fill with 10 elements as mantine required
  "#614700",
  "#614700",
  "#614700",
  "#614700",
] as const

const success = [
  "#F6FFED",
  "#D9F7BE",
  "#95DE64",
  "#52C41A",
  "#237804",
  "#092B00",
  // repeat to fill with 10 elements as mantine required
  "#092B00",
  "#092B00",
  "#092B00",
  "#092B00",
] as const

const warning = [
  "#FFF7E6",
  "#FFE7BA",
  "#FFC069",
  "#FA8C16",
  "#AD4E00",
  "#612500",
  // repeat to fill with 10 elements as mantine required
  "#612500",
  "#612500",
  "#612500",
  "#612500",
] as const

const danger = [
  "#FFF1F0",
  "#FFCCC7",
  "#FF7875",
  "#F5222D",
  "#A8071A",
  "#5C0011",
  // repeat to fill with 10 elements as mantine required
  "#5C0011",
  "#5C0011",
  "#5C0011",
  "#5C0011",
] as const

const transparentLight = [
  "rgba(239, 240, 246, 0.1)",
  "rgba(239, 240, 246, 0.25)",
  "rgba(239, 240, 246, 0.4)",
  "rgba(239, 240, 246, 0.65)",
  "rgba(239, 240, 246, 0.75)",
  "rgba(239, 240, 246, 0.95)",
  // repeat to fill with 10 elements as mantine required
  "rgba(239, 240, 246, 0.95)",
  "rgba(239, 240, 246, 0.95)",
  "rgba(239, 240, 246, 0.95)",
  "rgba(239, 240, 246, 0.95)",
] as const

const transparentDark = [
  "rgba(0, 0, 0, 0.1)",
  "rgba(0, 0, 0, 0.25)",
  "rgba(0, 0, 0, 0.4)",
  "rgba(0, 0, 0, 0.65)",
  "rgba(0, 0, 0, 0.75)",
  "rgba(0, 0, 0, 0.95)",
  // repeat to fill with 10 elements as mantine required
  "rgba(0, 0, 0, 0.95)",
  "rgba(0, 0, 0, 0.95)",
  "rgba(0, 0, 0, 0.95)",
  "rgba(0, 0, 0, 0.95)",
] as const

const transparentPrimary = [
  "rgba(123, 97, 255, 1)",
  "rgba(123, 97, 255, 0.25)",
  "rgba(123, 97, 255, 0.40)",
  "rgba(123, 97, 255, 0.65)",
  "rgba(123, 97, 255, 0.75)",
  "rgba(123, 97, 255, 0.95)",
  "rgba(123, 97, 255, 0.50)",
  // repeat to fill with 10 elements as mantine required
  "rgba(123, 97, 255, 0.95)",
  "rgba(123, 97, 255, 0.95)",
  "rgba(123, 97, 255, 0.95)",
] as const

const linear_gradient = `linear-gradient(
  270deg,
  rgba(219, 219, 219, 0.05) 0%,
  #dbdbdb 50%
)`

const skeleton = [
  "#E7E7E7",
  linear_gradient,
  // repeat to fill with 10 elements as mantine required
  linear_gradient,
  linear_gradient,
  linear_gradient,
  linear_gradient,
  linear_gradient,
  linear_gradient,
  linear_gradient,
  linear_gradient,
] as const

export const colors: MantineThemeOverride["colors"] = {
  gray,
  primary,
  secondary,
  tertiary,
  success,
  warning,
  danger,
  transparentLight,
  transparentDark,
  transparentPrimary,
  skeleton,
}