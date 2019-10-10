import styled, { createGlobalStyle } from 'styled-components';
import { Canvas as c } from 'react-three-fiber';

export default createGlobalStyle`
  body {
    margin: 0;
    background: black;
    font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif";
  }
`;

export const CodeFAB = styled.div`
  position: fixed;
  height: 24px;
  width: 24px;
  bottom: 16px;
  right: 16px;
  padding: 12px;
  border-radius: 50%;
  margin-bottom: 0px;
  background-color: #fff;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0.9;
  z-index: 999;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const Canvas = styled(c)`
  position: absolute;
  top: 0;
  left: 0;
`;
