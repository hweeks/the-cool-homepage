import React, { useState } from 'react';
import { TextFoot, LinkFoot } from '../footer/styles';
import devopsPdf from '../../static/devops.pdf';
import fullstackPdf from '../../static/fullstack.pdf';
import { ShowWhenOpenIsTrue, SometimesYouGottaDoLayoutShitViaStyledComponentsLikeThis } from './styles';

export const ResumeHolster = () => {
  const [open, setOpen] = useState(false);
  const toggleMyAss = () => setOpen(!open);
  return (
    <SometimesYouGottaDoLayoutShitViaStyledComponentsLikeThis>
      <ShowWhenOpenIsTrue open={!open}>
        <TextFoot onClick={toggleMyAss}>resume(s)</TextFoot>
      </ShowWhenOpenIsTrue>
      <ShowWhenOpenIsTrue open={open}>
        <div>
          <TextFoot onClick={toggleMyAss}>
            <LinkFoot href={fullstackPdf}>fullstack</LinkFoot>
          </TextFoot>
          <TextFoot onClick={toggleMyAss}>
            <LinkFoot href={devopsPdf}>devops</LinkFoot>
          </TextFoot>
        </div>
      </ShowWhenOpenIsTrue>
    </SometimesYouGottaDoLayoutShitViaStyledComponentsLikeThis>
  );
};
