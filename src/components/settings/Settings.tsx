import React, { useState } from "react";
import { Wrapper } from "../Wrapper";
import { Button } from "../button/Button";
import { S } from "./Settings_styles";
import { SettingsValue } from "./SettingsValue";

type SettingsPropsType = {
  maxValue: number;
  startValue: number;
};

export const Settings = (props: SettingsPropsType) => {
  const setToLocalStorage = (maxValue: number, startValue: number) => {
    localStorage.setItem("maxValue", JSON.stringify(maxValue));
    localStorage.setItem("startValue", JSON.stringify(startValue));
  };
  const [maxValue, setMaxValue] = useState(props.maxValue);
  const [startValue, setStartValue] = useState(props.startValue);

  const handleMaxValueChange = (value: number) => {
    setMaxValue(value);
  };

  const handleStartValueChange = (value: number) => {
    setStartValue(value);
  };
  return (
    <div>
      <S.Settings>
        <S.SettingsField>
          <S.SettingsBox>
            <SettingsValue
              title="max value"
              value={maxValue}
              onChange={handleMaxValueChange}
            />
            <SettingsValue
              title="start value"
              value={startValue}
              onChange={handleStartValueChange}
            />
          </S.SettingsBox>
        </S.SettingsField>
        <Wrapper>
          <Button
            onClick={() => {
              setToLocalStorage(maxValue, startValue);
            }}
          >
            set
          </Button>
        </Wrapper>
      </S.Settings>
    </div>
  );
};
