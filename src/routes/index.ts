import { createBrowserRouter } from 'react-router-dom';
import privateRoutes from './privateRoutes';
import publicRoutes from './publicRoutes';

const router = createBrowserRouter([
  ...publicRoutes,
  ...(false ? privateRoutes : []), // `true` will be condition to check if user is logged in or not/ or you can use any other condition
]);

export default router;
