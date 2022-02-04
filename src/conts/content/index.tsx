/* eslint-disable camelcase */
import React from 'react';
import { Header } from '../../comps/header';
import {
  ActualContent, MainText,
} from './styles';
import { DimensionalText } from '../../comps/text';
import { Footer } from '../../comps/footer';
import { some_of_the_things_i_like } from '../../utils';

export const Content = () => (
  <ActualContent>
    <Header />
    <MainText>
      <DimensionalText text={`i like ${some_of_the_things_i_like()}`} />
    </MainText>
    <Footer />
  </ActualContent>
);
