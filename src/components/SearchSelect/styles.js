import styled from "styled-components";
import { device } from "../../styles/devices";

export const Container = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  height: 40px;
  margin-bottom: 10px;
  position: relative;
  overflow: visible;
  margin-left: 8px;

  @media ${device.desktop} {
    width: 100%;
    margin-right: 10px;
  }

  @media ${device.tablet} {
    width: 100%;
    margin-right: 10px;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const Label = styled.label``;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  margin-bottom: 5px;

  :disabled {
    opacity: 1;
    border: 1px solid #f0f0f0;
    color: #161616;
    background-color: white;
  }

  @media ${device.mobile} {
    height: 40px;
  }
`;
