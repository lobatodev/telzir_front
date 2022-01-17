import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Container = styled.div`
  display: flex;
  background-color: #f5f3ef;
  flex-direction: column;
  height: 60vh;
  @media ${device.tablet} {
    height: 55vh;
  }
  @media ${device.mobile} {
    height: fit-content;
  }
`;
export const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 80px;
  @media ${device.tablet} {
    padding-top: 80px;
  }
  @media ${device.mobile} {
    padding-top: 30px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: "Londrina Solid", cursive;
  font-size: 50px;
  color: #e86400;
  @media ${device.tablet} {
    font-size: 40px;
  }
  &.plan {
    padding-top: 5px;
    font-size: 25px;
    color: #d55d02;
  }
`;

export const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  text-align: center;
  font-size: 18px;
  color: #7d7f85;

  @media ${device.tablet} {
    font-size: 16px;
    width: 70%;
  }

  &.minutes {
    width: 100%;
    font-size: 30px;
    font-family: "Londrina Solid", cursive;
    span {
      font-size: 10px;
      margin-top: -8px;
    }
  }
  span {
    font-size: 12px;
    padding-top: 3px;
    margin-bottom: 10px;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  width: 100%;
  height: 100%;
  @media ${device.tablet} {
    flex-direction: row;
    padding-top: 35px;
    height: 100%;
  }
  @media ${device.mobile} {
    flex-direction: column;
    padding: 10px 0;

    height: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: ${({ main }) => (main ? "24rem" : "19rem")};
  height: ${({ main }) => (main ? "24rem" : "20rem")};
  background-color: white;
  border-radius: 8px;
  border: ${({ main }) => (main ? "1px solid #e86400" : "none")};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  @media ${device.tablet} {
    width: ${({ main }) => (main ? "18rem" : "15rem")};
    height: ${({ main }) => (main ? "24rem" : "22rem")};
    margin-top: 25px;
  }
  @media ${device.mobile} {
    height: ${({ main }) => (main ? "19rem" : "20rem")};
  }
  &:nth-child(1) {
    border-radius: 8px 0 0 8px;
    @media ${device.tablet} {
      border-radius: 8px;
    }
  }
  &:nth-child(3) {
    border-radius: 0 8px 8px 0;
    @media ${device.tablet} {
      border-radius: 8px;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px;
  width: 100%;
  height: 30%;
  min-height: 80px;
  background-color: #f5f3ef;
  border-radius: 8px 8px 0 0;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
  color: #606267;
  width: 100%;
  height: 100%;
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    li {
      padding: 3px 0;
      &:last-child {
        padding-bottom: 15px;
      }
    }
  }
`;
