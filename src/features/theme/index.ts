import { colors } from "./colors";
import { fontSize } from "./fontSize";
import { fontWeight } from "./fontWeight";

export const theme = {
  colors,
  fontSize,
  fontWeight
};

export type ThemeType = typeof theme;

export type Color = keyof typeof colors;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
