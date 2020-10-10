import * as React from 'react';
import { TextFoot, BottomFooter, LinkFoot } from './styles';
import pdfLonk from '../../static/the-stuff-i-do-for-money.pdf';

export const Footer = () => (
  <BottomFooter>
    <TextFoot>
      <LinkFoot href="https://github.com/hweeks">code</LinkFoot>
      -
      <LinkFoot href={pdfLonk}>resume</LinkFoot>
      -
      <LinkFoot href="mailto:jobs@hweeks.com">contact</LinkFoot>
    </TextFoot>
  </BottomFooter>
);
