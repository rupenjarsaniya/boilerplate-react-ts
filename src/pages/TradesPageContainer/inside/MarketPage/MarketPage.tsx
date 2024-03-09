import { FC } from 'react';
import { Header } from './inside/Header';
import { AllUpdates } from './modules/AllUpdates';
import { Market } from './modules/Market';
import { BackNav } from '../../../../components/common/BackNav';

export const MarketPage: FC = () => (
  <>
    <BackNav />
    <Header />
    <h2>Market Page</h2>
    <AllUpdates />
    <Market />
  </>
);
