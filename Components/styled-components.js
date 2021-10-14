import styled from "@emotion/styled";

export const Input = styled.input`
  width: 100%;
  line-height: 27px;
  outline: none;
  border: ${({ border }) => border || "none"};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  background-color: transparent;
`;

export const ButtonIcon = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  background-color: ${({ backColor }) => backColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 15px;
`;
