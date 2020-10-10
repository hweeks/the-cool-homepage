import * as React from 'react';
import { Header } from '../../comps/header';
import bgVid from '../../static/bg.mp4';
import {
  HomeVideo, RootContainer, ActualContent, MainText,
} from './styles';
import { DimensionalText } from '../../comps/text';
import { Footer } from '../../comps/footer';

export const Home = () => (
  <RootContainer>
    <HomeVideo autoPlay muted loop playsInline>
      <source src={bgVid} type="video/mp4" />
    </HomeVideo>
    <ActualContent>
      <Header />
      <MainText>
        <DimensionalText text="i like bike" />
      </MainText>
      <Footer />
    </ActualContent>
  </RootContainer>
);
