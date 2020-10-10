import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { Home } from './conts/home';

const MainStyle = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
    font-family: 'Covered By Your Grace', cursive;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

ReactDOM.render(
  <>
    <MainStyle />
    <Home />
  </>,
  document.getElementById('home'),
);
