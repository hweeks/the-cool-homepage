import React from 'react';
import { Header } from '../../comps/header';
import {
  ActualContent, MainText,
} from './styles';
import { DimensionalText } from '../../comps/text';
import { Footer } from '../../comps/footer';

export const Content = () => (
  <ActualContent>
    <Header />
    <MainText>
      <DimensionalText text="i like bikes" />
    </MainText>
    <Footer />
  </ActualContent>
);
