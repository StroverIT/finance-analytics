export type InputProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  label: string;
  secureTextEntry?: boolean;
};
