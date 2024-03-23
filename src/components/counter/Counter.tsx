import { myTheme } from "../../styles/Theme.styled";
import { Button } from "../button/Button";
import { S } from "./Counter_Styles";
import { FlexWrapper } from "../Wrapper";

type CounterPropsType = {
  maxValue: number;
  minValue: number;
  incrementHandler: () => void;
  resetHandler: () => void;
  number: number;
};
export const Counter = ({
  maxValue,
  minValue,
  incrementHandler,
  resetHandler,
  number,
}: CounterPropsType) => {
  return (
    <S.Counter>
      <S.Number
        color={number === maxValue ? myTheme.colors.dark : myTheme.colors.light}
      >
        {number}
      </S.Number>
      <FlexWrapper>
        <Button onClick={incrementHandler} disabled={number === maxValue}>
          {"inc"}
        </Button>
        <Button onClick={resetHandler} disabled={number === minValue}>
          {"reset"}
        </Button>
      </FlexWrapper>
    </S.Counter>
  );
};
