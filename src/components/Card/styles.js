import styled from "styled-components";
import { device } from "../../styles/devices";

export const Container = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  max-width: 660px;
  width: ${({ width }) => (width ? width + "px" : "100%")};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 1;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;
