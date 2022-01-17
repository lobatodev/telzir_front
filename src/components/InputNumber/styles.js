import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  margin-left: 10px;
  user-select: none;
`;
export const BoxQtd = styled.div`
  width: 150px;
  color: #646464;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: row;
`;
export const ControlsContainer = styled.div`
  display: flex;
  width: 150px;
  border: 1px solid #cecece;
  border-radius: 8px;
  justify-content: space-between;
  position: relative;
`;

export const Input = styled.input`
  height: 48px;
  width: 150px;
  border: none;
  color: #646464;
  font-size: 18px;
  background-color: transparent;
  text-align: center;
  user-select: none;

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const Button = styled.button`
  background-color: transparent;
  border: none;
  width: 2rem;
  cursor: pointer;
`;

export const Label = styled.span`
  position: absolute;
  top: -18px;
  right: 0;
  left: 0;
`;

export const SubLabel = styled.span`
  position: absolute;
  top: 48px;
  right: 0;
  left: 0;
`;
