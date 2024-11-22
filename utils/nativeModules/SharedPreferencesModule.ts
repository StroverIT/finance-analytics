import { NativeModules } from "react-native";
const { SharedPreferencesModule } = NativeModules;

const setWidgetData = (key: string, value: any) => {
  SharedPreferencesModule.setWidgetData(key, value);
};

export default {
  setWidgetData,
};
