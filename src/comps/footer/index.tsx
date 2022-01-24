import React, { useEffect, useRef } from 'react';
import { TextFoot, BottomFooter, LinkFoot } from './styles';
import { ResumeHolster } from '../resume';

export const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const isProbablyIOsAndItsBar = footerRef.current.getBoundingClientRect().bottom
      >= window.innerHeight;
    const handleScrollBsForiOs = () => {
      footerRef.current.style.marginBottom = '20px';
      const currentView = footerRef.current.getBoundingClientRect();
      const isSeen = currentView.bottom <= window.innerHeight;
      if (!isSeen) {
        footerRef.current.style.marginBottom = '120px';
      }
      document.body.scrollTop = 0;
    };
    if (isProbablyIOsAndItsBar) {
      window.addEventListener('scroll', handleScrollBsForiOs);
    }
    handleScrollBsForiOs();
    return function cleanup() {
      if (isProbablyIOsAndItsBar) {
        window.removeEventListener('scroll', handleScrollBsForiOs);
      }
    };
  });
  return (
    <BottomFooter>
      <TextFoot ref={footerRef}>
        <LinkFoot href="https://github.com/hweeks">code</LinkFoot>
        -
        <ResumeHolster />
        -
        <LinkFoot href="mailto:jobs@hweeks.com">contact</LinkFoot>
      </TextFoot>
    </BottomFooter>
  );
};
