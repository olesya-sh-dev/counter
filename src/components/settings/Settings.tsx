import React from "react";
import { Wrapper } from "../Wrapper";
import { Button } from "../button/Button";
import { S } from "./Settings_styles";
import { SettingsValue } from "./SettingsValue";

export const Settings = () => {
  return (
    <div>
      <S.Settings>
        <S.SettingsField>
          <S.SettingsBox>
            <SettingsValue title="max value" />
            <SettingsValue title="start value" />
          </S.SettingsBox>
        </S.SettingsField>
        <Wrapper>
          <Button>set</Button>
        </Wrapper>
      </S.Settings>
    </div>
  );
};
