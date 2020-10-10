import styled from 'styled-components';

export const BottomFooter = styled.footer`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.8rem;
`;

export const TextFoot = styled.p`
  font-size: 3rem;
  -webkit-text-fill-color: #f98ca4;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #2f3e9c;
`;

export const LinkFoot = styled.a`
  font-size: 3rem;
  -webkit-text-fill-color: #f98ca4;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #2f3e9c;
  @media (max-width: 768px) {
    font-size: 12vw;
  }
`;
