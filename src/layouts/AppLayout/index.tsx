import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <h1>AppLayout</h1>
    <Outlet context={children} />
  </div>
);

export default AppLayout;
