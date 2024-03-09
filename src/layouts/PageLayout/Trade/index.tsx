import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

export const Trade: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <h1>Trades Layout</h1>
    <Outlet context={children} />
  </div>
);
