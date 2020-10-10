import React from 'react';
import { Video } from '../../comps/video';
import bgVid from '../../static/bg.mp4';
import { Content } from '../content';
import {
  RootContainer,
} from './styles';

export const Home = () => (
  <RootContainer>
    <Video url={bgVid} />
    <Content />
  </RootContainer>
);
