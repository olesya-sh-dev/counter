import { myTheme } from "../../styles/Theme.styled";
import { Button } from "../button/Button";
import { S } from "./Counter_Styles";
import { Wrapper } from "../Wrapper";

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
  const displayWarning =
    maxValue === minValue ||
    maxValue < minValue ||
    minValue < 0 ||
    maxValue < 0;

    //const warningText = "enter correct values and press 'set'"

  return (
    <S.Counter>
      <S.Number
        color={
          number === maxValue ? myTheme.colors.dark : myTheme.colors.primary
        }
      >
        {displayWarning ? <S.Warning>{"enter correct values and press 'set'"}</S.Warning> : number}
      </S.Number>
      <Wrapper>
        <Button onClick={incrementHandler} disabled={number === maxValue}>
          {"inc"}
        </Button>
        <Button onClick={resetHandler} disabled={number === minValue}>
          {"reset"}
        </Button>
      </Wrapper>
    </S.Counter>
  );
};
