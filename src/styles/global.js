import Roboto from "../assets/fonts/Roboto/Roboto-Regular.ttf";
import RobotoBold from "../assets/fonts/Roboto/Roboto-Bold.ttf";
import Londrina from "../assets/fonts/Londrina_Solid/LondrinaSolid-Regular.ttf";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    src: url(${Roboto}) format('truetype');
}

@font-face {
    font-family: 'Roboto Bold';
    font-style: normal;
    font-weight: normal;
    src: url(${RobotoBold}) format('truetype');
}
@font-face {
  font-family: 'Londrina Solid';
  font-style: normal;
  font-weight: normal;
  src: url(${Londrina}) format('truetype');
}

::placeholder {
    color: rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar{
		width: 3px;
}

input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
}
	input.error{
		border-color: red !important;
	}

  *{
  font-size: 14px;
  outline: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto;
  }

  body,html,#root {
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
    background: #fff;
  }

li{
  list-style: none;
}


::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #bbbbbb; 
}
 
::-webkit-scrollbar-thumb {
  background: orange; 
}
::-webkit-scrollbar-thumb:hover {
  background: orange;; 
}
`;
