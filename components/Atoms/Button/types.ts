export enum ColorThemes {
  primary = "primary",
  green = "green",
}

export type ButtonProps = {
  text: string;
  onPress: () => void;
  theme?: ColorThemes;
};
