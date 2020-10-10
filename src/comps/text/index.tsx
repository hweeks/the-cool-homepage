import * as React from 'react';
import styled from 'styled-components';

const red = '#f98ca4';
const blue = '#4ad9db';
const green = '#65f283';
const darkblue = '#2f3e9c';
const purple = '#6e1f58';

// thanks https://codepen.io/mandymichael/pen/VprZaq
const PoppingText = styled.p`
  font-family: 'Covered By Your Grace', sans-serif;
  text-transform: uppercase;
  font-size: 16vw;
  text-align: center;
  line-height: 1;
  margin: 0;
  position: relative;
  color: ${red};
  text-shadow:
      -1px -1px 0 ${purple},
      1px -1px 0 ${purple},
      -1px 1px 0 ${purple},
      1px 1px 0 ${purple},
      1px 0px 0px ${green},
      0px 1px 0px ${green},
      2px 1px 0px ${green},
      1px 2px 0px ${green},
      3px 2px 0px ${green},
      2px 3px 0px ${green},
      4px 3px 0px ${green},
      3px 4px 0px ${green},
      5px 4px 0px ${green},
      3px 5px 0px ${purple},
      6px 5px 0px ${purple},
      -1px 2px 0 black,
      0 3px 0 ${purple},
      1px 4px 0 ${purple},
      2px 5px 0px ${purple},
      2px -1px 0 ${purple},
      3px 0 0 ${purple},
      4px 1px 0 ${purple},
      5px 2px 0px ${purple},
      6px 3px 0 ${purple},
      7px 4px 0 ${purple},
      10px 10px 4px #dac249;

  &:after,
  &:before {
    content: attr(data-heading);
    position: absolute;
    overflow: hidden;
    left: 0;
    width: 100%;
    top: 0;
    z-index: 5;
  }

  @media (max-width: 768px) {
    font-size: 10rem;
  }

  &:after {
    height: 100%;
    color: ${blue};
    text-shadow:
      -1px -1px 0 ${darkblue},
      1px -1px 0 ${darkblue},
      -1px 1px 0 ${darkblue},
      1px 1px 0 ${darkblue},
      1px 0px 0px ${red},
      0px 1px 0px ${red},
      2px 1px 0px ${red},
      1px 2px 0px ${red},
      3px 2px 0px ${red},
      2px 3px 0px ${red},
      4px 3px 0px ${red},
      3px 4px 0px ${red},
      5px 4px 0px ${red},
      3px 5px 0px ${darkblue},
      6px 5px 0px ${darkblue},
      -1px 2px 0 black,
      0 3px 0 ${darkblue},
      1px 4px 0 ${darkblue},
      2px 5px 0px ${darkblue},
      2px -1px 0 ${darkblue},
      3px 0 0 ${darkblue},
      4px 1px 0 ${darkblue},
      5px 2px 0px ${darkblue},
      6px 3px 0 ${darkblue},
      7px 4px 0 ${darkblue};
  }`;

// eslint-disable-next-line arrow-body-style
export const DimensionalText = ({ text }:{text: string}) => {
  return <PoppingText data-heading={text}>{text}</PoppingText>;
};
