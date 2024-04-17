import { colors } from "./colors";
import { fontSize } from "./fontSize";
import { fontWeight } from "./fontWeight";

export const theme = {
  colors,
  fontSize,
  fontWeight
};

export type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
