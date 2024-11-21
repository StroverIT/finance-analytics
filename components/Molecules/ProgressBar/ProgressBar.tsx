import React, { FC } from "react";
import * as Progress from "react-native-progress";
import { ProgressBarProps } from "./types";

export const ProgressBar: FC<ProgressBarProps> = ({
  progress = 0,
  width = 300,
}) => {
  return <Progress.Bar progress={progress} width={width} />;
};
