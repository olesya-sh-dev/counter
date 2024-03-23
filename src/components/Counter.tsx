import React, { useState } from "react";
import { Button } from "./Button";
import styled from "styled-components";

export const Counter = () => {
  const [number, setNumber] = useState(0);

  const incrementHandler = () => {
    setNumber(number + 1);
  };

  const resetHandler = () => {
    setNumber(0);
  };

  return (
    <StyledCounter>
      <StylenNumber color={number === 5 ? "red" : "white"}>
        {number}
      </StylenNumber>
      <FlexWrapper>
        <Button
          title="inc"
          onClick={incrementHandler}
          disabled={number === 5}
        />
        <Button title="reset" onClick={resetHandler} disabled={number === 0} />
      </FlexWrapper>
    </StyledCounter>
  );
};

const StyledCounter = styled.div`
  border: 5px solid #38372c;
  background-color: #0fb82e;
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 200px;
  border-radius: 10px;
  gap: 20px;
`;
const StylenNumber = styled.span`
  font-size: 70px;
  color: ${(props) => props.color};
`;

const FlexWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
