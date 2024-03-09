import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <h1>AuthLayout</h1>
    <Outlet context={children} />
  </div>
);

export default AuthLayout;
