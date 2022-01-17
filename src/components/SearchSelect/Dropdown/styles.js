import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 2.5rem;
  max-height: 10rem;
  overflow-y: scroll;
  left: 0;
  z-index: 4;
  &.hide {
    display: none;
  }
  border-radius: 0px 0px 8px 8px;
`;

export const Item = styled.li`
  height: 2rem;
  min-height: 2rem;
  z-index: 500px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  background-color: #fafafa;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #bababa;
  }
`;
