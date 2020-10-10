import styled from 'styled-components';

export const HomeVideo = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const RootContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ActualContent = styled.div`
  z-index: 1;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
`;

export const MainText = styled.div`
  flex-grow: 2;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
