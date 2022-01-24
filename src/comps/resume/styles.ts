import styled from 'styled-components';

export const ShowWhenOpenIsTrue = styled.div<{open: boolean}>`
  display: ${(props) => (props.open ? 'block' : 'none')}
`;

export const SometimesYouGottaDoLayoutShitViaStyledComponentsLikeThis = styled.span`
  display: inline-block;
  text-decoration: underline;
  cursor: pointer;
`;
