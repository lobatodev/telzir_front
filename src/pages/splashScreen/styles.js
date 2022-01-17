import styled from "styled-components";
import { device } from "../../styles/devices";

export const Container = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Loader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  justify-content: center;
  padding: 20px;
  @media ${device.mobile} {
    width: 100%;
  }
  .loading {
    width: 90%;
    margin-left: 30px;
  }
`;

export const LoadSVG = styled.object`
  background-color: transparent;
`;

export const BG = styled.div`
  position: fixed;
  background-color: #e86400;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;

export const ElemOne = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  margin-left: -1rem;
  margin-top: -1rem;
  width: 30vw;
`;

export const ElemTwo = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 10vw;
`;

export const ElemThree = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30vw;
`;
