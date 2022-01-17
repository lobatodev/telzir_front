import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Container = styled.div`
  display: flex;
  background-color: #e86500e1;
  flex-direction: column;
  height: 110vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media ${device.tablet} {
    padding: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  width: 50%;
  padding: 25px 0 0 0;
  flex-direction: column;
  align-items: left;
  color: #e86400;
  h1 {
    font-family: "Londrina Solid", cursive;
    font-size: 50px;
    text-align: left;
    margin-top: -5px;
  }
  h2 {
    text-align: left;
  }
`;

export const ContentError = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8d7da;
  border-radius: 5px;
  border: 1px solid #f5c2c7;
  height: 30px;
  width: 100%;
  padding: 10px;
  margin-top: -10px;
  margin-bottom: 10px;
  color: #842029;
  .icon {
    cursor: pointer;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 25px 25px 25px;
`;

export const Form = styled.div`
  display: flex;
  max-width: 600px;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media ${device.mobile} {
    flex-direction: column;
  }

  &:nth-child(3) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 15px 0;
    label {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      font-size: 15px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      cursor: pointer;
      font-family: "Londrina Solid", cursive;
      font-size: 25px;
      color: #9a9a9a;
      &:hover {
        color: #e86400;
        input ~ .checkmark {
          background-color: #ccc;
        }
      }
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        &:checked ~ .checkmark {
          background-color: #e86400;
        }
        &:checked ~ .checkmark:after {
          display: block;
        }
      }
      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
        border-radius: 50%;
        &:after {
          content: "";
          position: absolute;
          display: none;
          top: 9px;
          left: 9px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: white;
        }
      }
    }
    @media ${device.tablet} {
      flex-direction: column;
    }
  }
`;

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  width: 150%;
  background-color: #e86400;
  color: white;
  justify-content: start;
  padding: 10px;
  border-radius: 0px 10px 10px 0px;
  z-index: 39;
  @media ${device.tablet} {
    width: 100%;
    border-radius: 0 0 10px 10px;
    flex-direction: row;
  }
`;

export const ContentPlan = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 15px;
  }
  h2 {
    font-size: 38px;
    font-family: "Londrina Solid", cursive;
    @media ${device.tablet} {
      &:after {
        content: "por";
        font-size: 15px;
        font-family: "Londrina Solid", cursive;
        padding-left: 5px;
      }
    }
    @media ${device.mobile} {
      &:after {
        display: none;
      }
    }
  }
  &:nth-child(3) {
    border-top: 1px solid #ffffffb8;
    margin-top: 10px;
    padding-top: 10px;
    @media ${device.tablet} {
      padding-top: 0;
      margin-top: 0;
      border-top: none;
      border-left: 1px solid #ffffffb8;
      padding-left: 10px;
    }
  }
`;

export const ContentPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  align-self: flex-start;

  span {
    font-family: "Londrina Solid", cursive;
    font-size: 20px;
  }
  h2 {
    font-family: "Londrina Solid", cursive;
    font-size: 40px;
    margin-top: -10px;
  }
  &:nth-child(2) {
    @media ${device.tablet} {
      padding: 0px 10px;
    }
  }
  &:nth-child(4) {
    @media ${device.tablet} {
      padding: 0px 10px;
    }
    p {
      margin-bottom: 30px;
    }
  }
`;
