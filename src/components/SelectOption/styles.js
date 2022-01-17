import styled from "styled-components";
import { device } from "../../styles/devices";

export const Container = styled.div`
  position: relative;
  min-width: 60px;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  margin: 0 10px;

  .simulator {
    min-width: 100px;
    margin-right: 25px;
  }

  &:after {
    content: ">";
    font: 20px "Londrina Solid", cursive;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    color: ${({ outline }) => (outline ? "#e86400" : "white")};
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    right: 4px;
    background-color: ${({ outline }) => (outline ? "#white" : "#e86400")};
    top: 25px;
    margin-right: -12px;
    padding: 0 0 2px;
    border: none;
    border-radius: 10px 10px 0px 0;
    width: 48px;
    height: 30px;
    pointer-events: none;
  }

  @media ${device.mobile} {
    width: 90%;
  }
`;

export const Label = styled.label`
  color: ${({ outline }) => (outline ? "white" : "#646464")};
  ${({ errors }) => (errors ? "color: red;" : "")};
`;

export const Select = styled.select`
  height: ${({ height }) => (height ? height + "px" : "100%")};
  width: 100%;
  margin-bottom: 24px;
  padding: 0 5px;
  color: #646464;
  font-size: 18px;
  background-color: white;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #cecece;
  cursor: pointer;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    border-color: #e86400;
  }
`;

export const Option = styled.option``;
