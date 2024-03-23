import { styled } from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

const Counter = styled.div`
  border: 5px solid ${myTheme.colors.accent};
  background-color: ${myTheme.colors.primary};
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 10px;
  gap: 20px;
  padding: 20px;
`;

const Number = styled.span`
  color: ${(props) => props.color};
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border: 5px solid ${myTheme.colors.accent};
  border-radius: 10px;
  background-color: ${myTheme.colors.secondary};
  font-size: 70px;
  color: ${(props) => props.color};
  width: 350px;
`;

export const S = {
  Counter,
  Number,
};
