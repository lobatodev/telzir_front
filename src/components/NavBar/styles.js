import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../styles/devices";

export const Container = styled.div`
  display: flex;
  position: fixed;
  background-color: white;
  justify-content: center;
  width: 100%;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 99;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  @media ${device.tablet} {
    width: 50%;
  }
`;

export const LogoImg = styled.img`
  width: 30%;
  cursor: pointer;
  @media ${device.tablet} {
    width: 40%;
  }
  @media ${device.mobile} {
    width: 50%;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  width: 90vw;
  justify-content: space-between;

  svg {
    g {
      text {
        background: white;
      }
    }
    font-size: 20px;
  }
`;

export const ContainerMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkMenu = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #e86400;
  font-size: 18px;
  padding: 0px 6px;

  &.icon {
    font-size: 25px;
  }

  &:hover {
    color: #c95802;
  }
`;

export const Span = styled.span`
  margin-left: 3px;
`;
