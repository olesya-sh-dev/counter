import React, { ChangeEvent, useState } from "react";
import { S } from "./Settings_styles";

type SettingsValueProps = {
  title: string;
};
export const SettingsValue = (props: SettingsValueProps) => {
  return (
    <S.SettingsValueItem>
      <span>{props.title}</span>
      <input type="number" />
    </S.SettingsValueItem>
  );
};
