import { FC } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

interface IProps {}

const App: FC<IProps> = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;
