import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #e86400;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${({ outline }) => (outline ? "#e86400" : "white")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  border-radius: 10px;
  background-color: ${({ outline }) => (outline ? "white" : "#e86400")};
  border: none;
  cursor: pointer;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "40px")};
  padding: 10px;
  user-select: none;
  &:hover {
    background-color: ${({ outline }) => (outline ? "#dedede" : "#d05a00")};
  }
`;
